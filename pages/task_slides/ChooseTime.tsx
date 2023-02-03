export function ChooseTime({
  taskName,
  savedRecordingUrl,
}: {
  taskName: string;
  savedRecordingUrl: string;
}) {
  return (
    <div className="relative h-screen w-screen">
      <div className="bg-black h-screen w-screen absolute"></div>
      <div className="flex justify-between items-center flex-col h-full relative z-30">
        <h4>Next up:</h4>
        <h3>{taskName}</h3>
        {savedRecordingUrl ? (
          <video
            id={"playback"}
            className="w-[300px]"
            src={savedRecordingUrl}
            controls
          ></video>
        ) : null}
      </div>
    </div>
  );
}
