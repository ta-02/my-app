const createNote = () => {
  return (
    <main className="space-y-8">
      <h1 className="flex justify-center border-b p-5 font-semibold">
        Create A New Note.
      </h1>
      <form
        className="flex w-full flex-col justify-center space-y-4 border-b p-10"
        action=""
      >
        <input type="text" id="class" name="class" placeholder="Class"></input>
        <input type="text" placeholder="Tags"></input>
        <input
          className="p-5"
          type="text"
          id="note"
          name="note"
          placeholder="..."
        ></input>
        <input type="Submit" value="Submit"></input>
      </form>
    </main>
  );
};

export default createNote;
