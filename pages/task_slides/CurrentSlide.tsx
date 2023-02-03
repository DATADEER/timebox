import { StartRecording } from "@/pages/task_slides/StartRecording";
import { WhileRecording } from "@/pages/task_slides/WhileRecording";
import { ChooseTime } from "@/pages/task_slides/ChooseTime";

export type SlideState = "START_RECORDING" | "WHILE_RECORDING" | "CHOOSE_TIME";

export function CurrentSlide({
  slideState,
  isRecording,
  startTaskRecording,
  stopTaskRecording,
  savedRecordingUrl,
}: {
  slideState: SlideState;
  isRecording: boolean;
  startTaskRecording: () => void;
  stopTaskRecording: () => void;
  savedRecordingUrl: string | null;
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
        />
      );
    case "CHOOSE_TIME":
      return (
        <ChooseTime
          savedRecordingUrl={savedRecordingUrl}
          taskName={"dummy name"}
        />
      );
    default:
      return null;
  }
}
