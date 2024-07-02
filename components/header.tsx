import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";


export const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/home">Laurier Notes</Link>
      <div className="flex w-full items-center justify-between border-b p-1 text-xl font-semibold">
        <Link href="/create">Create</Link>
        <Link href="/myNotes">My Notes</Link>
        <Link href="/placeholder">Placeholder</Link>
        <Link href="/placeholder">Placeholder</Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
