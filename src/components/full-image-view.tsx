import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
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
  );
}
