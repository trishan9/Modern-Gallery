import FullImageView from "~/components/full-image-view";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return (
    <div>
      <FullImageView id={idAsNumber} />
    </div>
  );
}
