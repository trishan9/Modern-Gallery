import FullImageView from "~/components/full-image-view";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullImageView id={photoId} />
    </Modal>
  );
}
