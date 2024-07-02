import { db } from "~/server/db";

export default async function HomePage() {
  /* eslint-disable */
  const notes = await db.query.notes.findMany();
  console.log(notes);

  return (
    <main className="p-4">
      Hello, welcome to my app
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.name}</li>
        ))}
      </ul>
    </main>
  );
}
