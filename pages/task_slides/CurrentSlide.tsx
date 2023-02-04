import { StartRecording } from "@/pages/task_slides/StartRecording";
import { WhileRecording } from "@/pages/task_slides/WhileRecording";
import { ChooseTime } from "@/pages/task_slides/ChooseTime";
import { Timer } from "@/pages/task_slides/Timer";

export type SlideState =
  | "START_RECORDING"
  | "WHILE_RECORDING"
  | "CHOOSE_TIME"
  | "TIMER";

export function CurrentSlide({
  slideState,
  isRecording,
  startTaskRecording,
  stopTaskRecording,
  savedRecordingUrl,
  transcriptionResults,
  setTimerStartTime,
  currentTaskDuration,
  finishTask,
}: {
  slideState: SlideState;
  isRecording: boolean;
  startTaskRecording: () => void;
  stopTaskRecording: () => void;
  savedRecordingUrl: string | null;
  transcriptionResults: string[];
  setTimerStartTime: (time: number) => void;
  currentTaskDuration: number;
  finishTask: () => void;
}) {
  switch (slideState) {
    case "START_RECORDING":
      return (
        <StartRecording
          isRecording={isRecording}
          startTaskRecording={startTaskRecording}
          stopTaskRecording={stopTaskRecording}
        />
      );
    case "WHILE_RECORDING":
      return (
        <WhileRecording
          isRecording={isRecording}
          startTaskRecording={startTaskRecording}
          stopTaskRecording={stopTaskRecording}
          transcriptionResults={transcriptionResults}
        />
      );
    case "CHOOSE_TIME":
      return (
        <ChooseTime
          savedRecordingUrl={savedRecordingUrl}
          taskName={transcriptionResults.join(" ")}
          setTimerStartTime={setTimerStartTime}
        />
      );
    case "TIMER":
      return (
        <Timer
          taskName={transcriptionResults.join(" ")}
          startDuration={currentTaskDuration}
          finishTask={finishTask}
        />
      );
    default:
      return null;
  }
}
