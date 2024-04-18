import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
          />

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
