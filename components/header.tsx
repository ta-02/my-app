import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="flex w-full">
        <Link href="/" className="hover:text-blue-700">
          Laurier Notes
        </Link>
        <div className="ml-10 flex items-start justify-start space-x-10">
          <Link href="/createNote" className="hover:text-blue-700">
            Create Note
          </Link>
          <Link href="/myNotes" className="hover:text-blue-700">
            My Notes
          </Link>
        </div>
      </div>
      <div className="ml-4 flex flex-row items-center gap-4">
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
