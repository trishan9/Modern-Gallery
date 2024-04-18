import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function Photo({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image
        src={image.url}
        alt={image.name}
        className="w-96"
        width={384}
        height={384}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
}
