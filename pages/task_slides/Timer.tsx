import { useState } from "react";
import { useTimer } from "react-timer-hook";

import { addMinutes } from "date-fns";

export function Timer({
  taskName,
  startDuration,
  finishTask,
}: {
  taskName: string;
  startDuration: number;
  finishTask: () => void;
}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: addMinutes(new Date(), startDuration),
    onExpire: () => console.log("onExpire called"),
  });

  return (
    <div className="text-white flex justify-between items-center flex-col h-full relative z-30">
      <div className="pt-40">
        <h4 className="text-lg mb-1">Next up:</h4>
        <div className="w-[300px]">
          <h3 className="text-2xl border-2 p-4 mb-4">{taskName}</h3>
        </div>
        <div className="pt-40">
          <h4 className="text-8xl mb-1">
            {prefixWith0IfLessThan10(hours)} :{" "}
            {prefixWith0IfLessThan10(minutes)} :{" "}
            {prefixWith0IfLessThan10(seconds)}
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="text-teal-700 border-teal-700 border-4 text-white font-bold px-4 py-2"
            onClick={() => {
              pause();
              finishTask();
            }}
          >
            Finish
          </button>
          <button
            className="bg-teal-700 text-white font-bold px-4 py-2"
            onClick={isRunning ? pause : resume}
          >
            {isRunning ? "Pause" : "Resume"}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function prefixWith0IfLessThan10(number: number) {
  return number < 10 ? `0${number}` : number;
}
