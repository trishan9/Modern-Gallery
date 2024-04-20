import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center">
      <div className="flex-shrink flex-grow">
        <div className="flex w-full items-center justify-center">
          <Image
            src={image.url}
            className="h-auto w-96 object-contain"
            width={384}
            height={384}
            alt={image.name}
            priority
          />
        </div>
      </div>

      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
