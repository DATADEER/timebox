export function StartRecording({isRecording, startTaskRecording, stopTaskRecording}){
    return (
        <div className="relative h-screen w-screen">
            <div className="bg-black h-screen w-screen opacity-60 absolute"></div>
            <div className="flex justify-between items-center flex-col h-full relative z-30">
                <div className="pt-40 font-bold text-white">
                    <h1 className="text-5xl">Record</h1>
                    <h2 className="text-2xl">your next task!</h2>
                </div>
                <div className="text-white">
                    <p>State your goal in one sentence</p>
                    <p>Focus on the result</p>
                    <em>e.g. “Write one page of my biography”</em>
                </div>
                <div className="p-12">
                    <button className="bg-red-500 text-white px-4 py-2 " onClick={isRecording ? stopTaskRecording : startTaskRecording}>{`${isRecording ? "Stop" : "Start"} Recording`}</button>
                </div>
            </div>
        </div>
        )
}
