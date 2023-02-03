export function WhileRecording({isRecording, startTaskRecording, stopTaskRecording}){
    return (<div className="flex justify-end items-center flex-col h-full">
        <div className="p-12">
            <button className="bg-red-500 text-white px-4 py-2 " onClick={isRecording ? stopTaskRecording : startTaskRecording}>{`${isRecording ? "Stop" : "Start"} Recording`}</button>
        </div>
    </div>)
}
