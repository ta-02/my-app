import Link from "next/link";
import { db } from "~/server/db";

const ShowNotesPreview = async () => {
  const notes = await db.query.notes.findMany();

  return (
    <div className="container flex flex-wrap items-center px-4">
      {notes.map((note) => (
        <Link
          href={`/note/${note.id}`}
          key={note.id}
          className="container m-4 rounded-lg bg-gray-500 p-4 shadow-md"
        >
          <div>
            <h2 className="mb-2 text-lg font-semibold">{note.name}</h2>
            {note.tags.length !== 0 && (
              <div className="mb-2">
                <h3 className="font-medium text-gray-600">Tags:</h3>
                <ul className="list-inside list-disc">
                  {note.tags.map((tag, index) => (
                    <li key={index} className="ml-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-gray-700">
              <p>{note.class && "Class: " + note.class}</p>
              <p>{note.lecture && "Lecture: " + note.lecture}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowNotesPreview;
