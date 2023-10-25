function getThreadTypeForRendererThread(traceParseData, pid, thread) {
    let threadType = "OTHER" /* ThreadType.OTHER */;
    if (thread.name === 'CrRendererMain') {
        threadType = "MAIN_THREAD" /* ThreadType.MAIN_THREAD */;
    }
    else if (thread.name === 'DedicatedWorker thread') {
        threadType = "WORKER" /* ThreadType.WORKER */;
    }
    else if (thread.name?.startsWith('CompositorTileWorker')) {
        threadType = "RASTERIZER" /* ThreadType.RASTERIZER */;
    }
    else if (traceParseData.AuctionWorklets.worklets.has(pid)) {
        threadType = "AUCTION_WORKLET" /* ThreadType.AUCTION_WORKLET */;
    }
    return threadType;
}
/**
 * Given trace parsed data, this helper will return a high level array of
 * ThreadData. This is useful because it allows you to get a list of threads
 * regardless of if the trace is a CPU Profile or a Tracing profile. Thus you
 * can use this helper to iterate over threads in confidence that it will work
 * for both trace types.
 */
export function threadsInTrace(traceParseData) {
    const foundThreads = [];
    // If we have Renderer threads, we prefer to use those. In the event that a
    // trace is a CPU Profile trace, we will never have Renderer threads, so we
    // know if there are no Renderer threads that we can fallback to using the
    // data from the SamplesHandler.
    if (traceParseData.Renderer && traceParseData.Renderer.processes.size) {
        for (const [pid, process] of traceParseData.Renderer.processes) {
            for (const [tid, thread] of process.threads) {
                const threadType = getThreadTypeForRendererThread(traceParseData, pid, thread);
                if (!thread.tree) {
                    // Drop threads where we could not create the tree; this indicates
                    // unexpected data and we won't be able to support all the UI
                    // filtering we need.
                    continue;
                }
                foundThreads.push({
                    name: thread.name,
                    pid,
                    tid,
                    entries: thread.entries,
                    tree: thread.tree,
                    type: threadType,
                });
            }
        }
    }
    else if (traceParseData.Samples && traceParseData.Samples.profilesInProcess.size) {
        for (const [pid, process] of traceParseData.Samples.profilesInProcess) {
            for (const [tid, thread] of process) {
                if (!thread.profileTree) {
                    // Drop threads where we could not create the tree; this indicates
                    // unexpected data and we won't be able to support all the UI
                    // filtering we need.
                    continue;
                }
                foundThreads.push({
                    pid,
                    tid,
                    // CPU Profile threads do not have a name.
                    name: null,
                    entries: thread.profileCalls,
                    tree: thread.profileTree,
                    type: "CPU_PROFILE" /* ThreadType.CPU_PROFILE */,
                });
            }
        }
    }
    return foundThreads;
}
//# sourceMappingURL=Threads.js.map