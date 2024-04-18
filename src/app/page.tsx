import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/07732bc1-b95b-4220-8fde-66a0458c6967-667ue8.png",
  "https://utfs.io/f/4feecdf4-7a9e-4fd6-87a9-b56053eb4417-667ue3.png",
  "https://utfs.io/f/940917f2-3c9f-4364-a641-2b82c30991a5-667uey.png",
  "https://utfs.io/f/26919812-1195-441a-aedf-a33a017c2739-667udd.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
