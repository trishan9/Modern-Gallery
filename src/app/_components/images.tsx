"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { useImagesStore } from "~/store/images";

type TImage = {
  id: number;
  name: string;
  url: string;
};

export default function Images(props: { images: TImage[] }) {
  const imageGrid = useImagesStore((state) => state.imageGrid);
  console.log(imageGrid);

  return (
    <div
      className={cn(
        "grid items-center justify-center gap-6 pt-6 ",
        imageGrid == 1 && "grid-cols-dynamic-1",
        imageGrid == 2 && "grid-cols-dynamic-2",
        imageGrid == 3 && "grid-cols-dynamic-3",
        imageGrid == 4 && "grid-cols-dynamic-4",
        imageGrid == 5 && "grid-cols-dynamic-5",
        imageGrid <= 0 && "grid-cols-dynamic",
      )}
    >
      {props?.images?.map((image: TImage) => (
        <div
          key={image.id}
          className="my-6 h-full w-full overflow-hidden rounded-lg border"
        >
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              width={1080}
              height={1080}
              priority
              className="aspect-square h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
