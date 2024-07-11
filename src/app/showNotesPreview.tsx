import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { db } from "~/server/db";

const ShowNotesPreview = async () => {
  const notes = await db.query.notes.findMany({
    limit: 3,
  });

  return (
    <div className="container flex flex-wrap items-center px-4">
      {notes
        ? notes.map((note) => (
            <Link
              href={`/note/${note.id}`}
              key={note.id}
              className="container m-4 rounded-lg p-4 shadow-md"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{note.name} </CardTitle>
                  <CardDescription>{note.tags}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{note.noteText}</p>
                </CardContent>
                <CardFooter>
                  <p>{note.id}</p>
                </CardFooter>
              </Card>
            </Link>
          ))
        : "You Have No Notes..."}
    </div>
  );
};

export default ShowNotesPreview;
