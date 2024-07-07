const createNote = () => {
  return (
    <main className="space-y-8">
      <h1 className="flex border-b p-5 justify-center font-semibold">Create A New Note.</h1>
          <form className="w-full flex border-b p-10 justify-center flex-col space-y-4"
                action="">
                <input type="text" id="class" name="class" placeholder="Class"></input>
                <input type="text" placeholder="Tags"></input>
                <input className="p-5" type="text" id="note" name="note" placeholder="..."></input>
                <input type="Submit" value="Submit"></input>
          </form>
    </main>
  );
};

export default createNote;
