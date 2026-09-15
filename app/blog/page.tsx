// app/blog/page.tsx
//
// Blog index. getAllPosts is newest-first and the page shows posts in exactly
// that order - a `featured: true` post does NOT jump the queue. The newest post
// is the large featured card; every later post fills the grid below it.

import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCardFeatured, BlogCardSmall } from "@/components/BlogCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, playbooks and field notes from the team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured] = posts;
  // Every remaining post, not just the next few - the grid wraps as the list grows.
  const gridPosts = posts.slice(1);

  return (
    <main className="flex-1">
      <PageHero
        title="Blog"
        intro="Ideas, playbooks and field notes, newest first."
      />

      <Section className="bg-white">
        {posts.length === 0 ? (
          <p className="lead">No posts yet. Check back shortly.</p>
        ) : (
          <>
            {featured && (
              <Reveal y={18}>
                <BlogCardFeatured post={featured} />
              </Reveal>
            )}

            {gridPosts.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gridPosts.map((post, i) => (
                  // Stagger resets every row of three, so later rows don't pile up delay.
                  <Reveal key={post.slug} delay={(i % 3) * 0.08} y={18} className="h-full">
                    <BlogCardSmall post={post} />
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}
      </Section>

      <CtaBand />
    </main>
  );
}
