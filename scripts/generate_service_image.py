"""
Generate a service-page image using Replicate's Flux model.

Setup:
    pip install replicate
    setx REPLICATE_API_TOKEN "your_token_here"   (Windows, then restart terminal)
    # or for the current session only:
    $env:REPLICATE_API_TOKEN = "your_token_here"

Usage:
    python scripts/generate_service_image.py --service "Social Media Management" --prompt "modern flat illustration of a social media dashboard, brand colors, clean, minimal"

    # Optional flags:
    python scripts/generate_service_image.py -s "SEO Services" -p "..." --model flux-schnell --aspect 16:9
"""

import argparse
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path

try:
    import replicate
except ImportError:
    sys.exit("Missing dependency. Run: pip install replicate")

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "outputs"

# Common Flux variants on Replicate. Pick whichever fits your budget/quality needs.
MODEL_MAP = {
    "flux-schnell": "black-forest-labs/flux-schnell",
    "flux-dev": "black-forest-labs/flux-dev",
    "flux-pro": "black-forest-labs/flux-pro",
    "flux-1.1-pro": "black-forest-labs/flux-1.1-pro",
}


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return slug or "service"


def generate_image(service_name: str, prompt: str, model_key: str, aspect_ratio: str) -> Path:
    if not os.environ.get("REPLICATE_API_TOKEN"):
        sys.exit(
            "REPLICATE_API_TOKEN is not set. Set it as an environment variable before running this script."
        )

    model = MODEL_MAP.get(model_key, model_key)  # allow passing a raw model id too

    client = replicate.Client(timeout=60)

    print(f"Generating image with {model} ...")
    # Create the prediction and poll for it via raw HTTP requests, rather than:
    #  - replicate.run()'s blocking "Prefer: wait" request, which can hang
    #    indefinitely on some networks/proxies even though plain create/get
    #    requests work fine, and
    #  - client.models.predictions.create(), whose Pydantic response model
    #    rejects the version: null that official (non-versioned) models return.
    resp = client._request("POST", f"/v1/models/{model}/predictions", json={
        "input": {
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "output_format": "png",
        }
    })
    prediction = resp.json()

    while prediction["status"] not in ("succeeded", "failed", "canceled"):
        time.sleep(2)
        prediction = client._request("GET", prediction["urls"]["get"]).json()
        print(f"  status: {prediction['status']}")

    if prediction["status"] != "succeeded":
        sys.exit(f"Prediction {prediction['status']}: {prediction.get('error')}")

    output = prediction["output"]

    # Output is typically a URL string, or a list of URL strings, depending on model.
    if isinstance(output, list):
        result = output[0]
    else:
        result = output

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    filename = f"{slugify(service_name)}-{timestamp}.png"
    out_path = OUTPUT_DIR / filename

    import urllib.request

    urllib.request.urlretrieve(str(result), out_path)

    print(f"Saved: {out_path}")
    return out_path


def main():
    parser = argparse.ArgumentParser(description="Generate a service-page image via Replicate Flux.")
    parser.add_argument("--service", "-s", required=True, help="Service name (used in the output filename)")
    parser.add_argument("--prompt", "-p", required=True, help="Image generation prompt")
    parser.add_argument(
        "--model",
        "-m",
        default="flux-schnell",
        help=f"Model key ({', '.join(MODEL_MAP)}) or a raw Replicate model id. Default: flux-schnell",
    )
    parser.add_argument(
        "--aspect",
        default="16:9",
        help="Aspect ratio, e.g. 1:1, 16:9, 4:3. Default: 16:9",
    )
    args = parser.parse_args()

    generate_image(args.service, args.prompt, args.model, args.aspect)


if __name__ == "__main__":
    main()
