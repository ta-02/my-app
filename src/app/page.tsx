import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export default async function HomePage() {
  const notes = await db.query.notes.findMany();

  return (
    <main className="p-4">
      <SignedOut>
        <div className="flex justify-center">Please Sign In Above!</div>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center">
          Hello, welcome to Laurier Notes
        </div>
        <ul className="container">
          {notes.map((note) => (
            <li key={note.id}>{note.name}</li>
          ))}
        </ul>
      </SignedIn>
    </main>
  );
}
