import { SignedIn, SignedOut } from "@clerk/nextjs";
import Home from "./_components/home";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <section className="flex w-full items-center justify-center">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please signin above
        </div>
      </SignedOut>

      <SignedIn>
        <Home />
      </SignedIn>
    </section>
  );
}
