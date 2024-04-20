import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/components/upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold ">
      <div>Image Gallery</div>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UploadButton />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
