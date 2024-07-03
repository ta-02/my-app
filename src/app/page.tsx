import { SignedIn, SignedOut } from "@clerk/nextjs";
import ShowNotesPreview from "./showNotesPreview";

export default async function HomePage() {
  return (
    <main className="p-4">
      <SignedOut>
        <div className="flex justify-center">Please Sign In Above!</div>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center">
          Hello, welcome to Laurier Notes
        </div>
        <ShowNotesPreview />
      </SignedIn>
    </main>
  );
}
