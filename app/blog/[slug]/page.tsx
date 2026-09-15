// app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isValidElement } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllPosts,
  getPostBySlug,
  formatPostDate,
  getHeadings,
  slugifyHeading,
} from "@/lib/blog";
import { ArticleToc } from "@/components/ArticleToc";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [post.image] : undefined,
    },
  };
}

/** Flatten a heading's rendered children back to plain text, so its anchor id
 *  matches the one getHeadings derived from the same markdown. */
function nodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    return nodeText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

/** Whole minutes at ~220 words a minute, never less than one. Kept here rather
 *  than in lib/blog, which has to stay identical across the Soch sites. */
function readingMinutes(body: string): number {
  const words = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images carry no reading time
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadings(post.body);
  const hasToc = headings.length > 1;
  const readingTime = readingMinutes(post.body);

  return (
    <main className="flex-1">
      {/* Split hero: text left, contained image right, on the tinted mist ground. */}
      <section className="border-b border-line bg-mist">
        <div
          className={`container-x grid grid-cols-1 items-center gap-10 py-10 sm:py-12 lg:gap-14 lg:py-14 ${
            post.image ? "lg:grid-cols-2" : ""
          }`}
        >
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-4">
              {post.category && <span className="eyebrow w-fit">{post.category}</span>}
              <h1 className="text-h2">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate">
                {post.date && (
                  <>
                    <span>{formatPostDate(post.date)}</span>
                    <span aria-hidden="true">&middot;</span>
                  </>
                )}
                <span>{readingTime} min read</span>
              </div>
            </div>
          </Reveal>

          {post.image && (
            <Reveal delay={0.1}>
              {/* A static visual, so it carries a resting shadow (unlike the index cards).
                  Plain <img> for the same reason as BlogCard: pipeline images can live
                  on hosts next/image isn't configured for. */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <Section className="bg-white">
        <div
          className={
            hasToc
              ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14"
              : ""
          }
        >
          {hasToc && <ArticleToc headings={headings} />}

          <article className={`prose-blog max-w-3xl ${hasToc ? "" : "mx-auto"}`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Anchor targets for the TOC. All three levels get ids because
                // getHeadings falls back to h3/h4 on posts that have no h2.
                // scroll-mt clears the sticky header. Markdown headings carry
                // no attributes, so nothing else from props needs forwarding
                // (and `node` must not reach the DOM).
                h2: ({ children }) => (
                  <h2 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h4>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
