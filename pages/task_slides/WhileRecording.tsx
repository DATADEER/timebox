export function WhileRecording({
  isRecording,
  startTaskRecording,
  stopTaskRecording,
  transcriptionResults,
}) {
  return (
    <div className="flex justify-end items-center flex-col h-full">
      <ul className={"mb-auto pt-40"}>
        {transcriptionResults.map((result, index) => (
          <li key={result}>
            <h1 className={"bg-black p-4 text-4xl text-white font-bold"}>
              {result}
            </h1>
          </li>
        ))}
      </ul>
      <div className="p-12">
        <button
          className="bg-red-500 text-white px-4 py-2 "
          onClick={isRecording ? stopTaskRecording : startTaskRecording}
        >{`${isRecording ? "Stop" : "Start"} Recording`}</button>
      </div>
    </div>
  );
}
