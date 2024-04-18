import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <section>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please signin above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </section>
  );
}
