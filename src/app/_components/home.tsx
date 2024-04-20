import { Input } from "~/components/ui/input";
import { getMyImages } from "~/server/queries";
import Images from "./images";

import ImageActions from "./actions";

export default async function Home() {
  const images = await getMyImages();

  return (
    <section className="w-full px-6 py-12 xl:w-[1350px]">
      <div className="flex flex-col gap-4 py-4">
        <p className="text-4xl font-semibold">Images</p>

        <Input type="search" placeholder="Search" />

        <div className="flex w-full flex-col items-center justify-between gap-y-4 pt-6 lg:flex-row">
          <p className="font-inter text-sm text-zinc-600">
            {images.length} Images
          </p>

          <ImageActions />
        </div>
      </div>

      <Images images={images} />
    </section>
  );
}
