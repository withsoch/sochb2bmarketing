import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/AuditModal";
import { BookAutoOpen } from "@/components/BookAutoOpen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Geometric sans for headlines and the wordmark. Poppins is not a variable
// font on Google Fonts, so every weight we use has to be requested explicitly.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Placeholder domain, replace with the real one before launch.
const SITE_URL = "https://soch.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logos/favicon-icon.png",
    shortcut: "/logos/favicon-icon.png",
    apple: "/logos/favicon-icon.png",
  },
  title: {
    default: "Social Media Marketing for B2B & Growing Businesses",
    template: "%s",
  },
  description:
    "We run Instagram, LinkedIn, Google and review replies for B2B and growing businesses. You approve every post. Packages from €290/month.",
  keywords: [
    "B2B social media marketing",
    "LinkedIn marketing agency",
    "social media management for businesses",
    "Google Business Profile management",
    "business review management",
    "Instagram management for businesses",
    "LinkedIn outreach management",
    "lead generation agency",
    "B2B marketing agency",
  ],
  openGraph: {
    title: "Soch: Social Media Marketing for B2B & Growing Businesses",
    description:
      "We run Instagram, LinkedIn, Google and review replies for B2B and growing businesses. You approve every post. Packages from €290/month.",
    url: SITE_URL,
    siteName: "Soch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soch: Social Media Marketing for B2B & Growing Businesses",
    description:
      "We run Instagram, LinkedIn, Google and review replies for B2B and growing businesses. You approve every post. Packages from €290/month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <AuditModalProvider>
          <BookAutoOpen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AuditModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
