import { useState } from "react";

export function ChooseTime({
  taskName,
  savedRecordingUrl,
  setTimerStartTime,
}: {
  taskName: string;
  savedRecordingUrl: string;
  setTimerStartTime: (time: number) => void;
}) {
  const [customTime, setCustomTime] = useState(1);

  return (
    <div className="relative h-screen w-screen">
      <div className="bg-black h-screen w-screen absolute"></div>
      <div className="text-white flex justify-between items-center flex-col h-full relative z-30">
        <div className="pt-40">
          <h4 className="text-lg mb-1">Next up:</h4>
          <div className="w-[300px]">
            <h3 className="text-2xl border-2 p-4 mb-4">{taskName}</h3>
            {savedRecordingUrl ? (
              <video id={"playback"} src={savedRecordingUrl} controls></video>
            ) : null}
          </div>
        </div>
        <div>
          <h4 className="text-lg mb-1">How long will it take?</h4>
          <div className="flex flex-col gap-2 mb-8">
            {[15, 30, 45].map((time) => (
              <button
                key={time}
                className="bg-teal-700 text-white font-bold px-4 py-2 "
                onClick={() => setTimerStartTime(time)}
              >
                {time} minutes
              </button>
            ))}
          </div>
          <div className="flex flex-col pb-40">
            <input
              className={"mb-1 custom-range"}
              onChange={onRangeChange}
              value={customTime}
              min={1}
              max={90}
              step={1}
              type="range"
            />
            <button
              onClick={() => setTimerStartTime(customTime)}
              className="bg-teal-700 text-white font-bold px-4 py-2 "
            >
              {customTime} minutes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function onRangeChange(e) {
    setCustomTime(e.target.value);
  }
}
