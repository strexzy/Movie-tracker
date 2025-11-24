import SavedList from "../../components/SavedList";

const Watching = () => {
  return (
    <main className="grow overflow-y-hidden flex flex-col justify-around">
      <div className="flex justify-between gap-41.5">
        <SavedList title="Currently Watching" />
        <SavedList title="Suggested To Watch" className="max-w-184.5" />
      </div>
      <div className="flex flex-col gap-5">
        <SavedList title="Previously Watched" className="max-w-full" />
      </div>
    </main>
  );
};

export default Watching;
