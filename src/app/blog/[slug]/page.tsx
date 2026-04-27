import { notFound } from "next/navigation";

const posts: Record<string, { title: string; body: string[] }> = {
  "freelancer-tax-planning": {
    title: "Freelancer tax planning basics",
    body: [
      "Freelancer tax planning generally starts with clean records, realistic income estimates, and professional review before payments are made.",
      "This article is informational only and is not tax, legal, accounting, or financial advice.",
    ],
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">{post.title}</h1>
      <p className="mt-2 font-semibold text-amber-800">Estimated educational content only. Consult a qualified CPA.</p>
      {post.body.map((paragraph) => (
        <p key={paragraph} className="mt-4">{paragraph}</p>
      ))}
    </main>
  );
}
