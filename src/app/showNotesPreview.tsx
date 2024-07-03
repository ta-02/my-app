import { db } from "~/server/db";

const ShowNotesPreview = async () => {
  const notes = await db.query.notes.findMany();

  return (
    <ul className="container">
      {notes.map((note) => (
        <li key={note.id}>{note.name}</li>
      ))}
    </ul>
  );
};

export default ShowNotesPreview;
