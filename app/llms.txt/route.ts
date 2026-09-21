import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

// Rebuilt at build time, which is every deploy — so every new post.
export const dynamic = "force-static";

/**
 * llms.txt: a plain-text map of the site for language models (llmstxt.org).
 * What the site is, the pages that explain it, and every post with its summary.
 */
export function GET() {
  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ""}`)
    .join("\n");

  const body = `# Social Catalyst

> Social Catalyst runs Instagram, LinkedIn, Google and review replies for B2B and growing businesses. Clients approve every post.

## Pages

- [About](${SITE_URL}/about)
- [Services](${SITE_URL}/services)
- [Packages](${SITE_URL}/packages)
- [Case studies](${SITE_URL}/case-studies)
- [Blog](${SITE_URL}/blog)
- [Audit](${SITE_URL}/audit)
- [Book](${SITE_URL}/book)

## Posts

${posts}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
