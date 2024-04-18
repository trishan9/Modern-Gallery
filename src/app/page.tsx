import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <img src={image.url} alt="" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="p-4">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please signin above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
