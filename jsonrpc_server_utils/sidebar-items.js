initSidebarItems({"mod":[["codecs","Codecs utilities"],["cors","CORS handling utility functions"],["hosts","Host header validation."],["reactor","Event Loop Executor"],["session","Session statistics."]],"struct":[["SuspendableStream","`Incoming` is a stream of incoming sockets Polling the stream may return a temporary io::Error (for instance if we can't open the connection because of \"too many open files\" limit) we use for_each combinator which: 1. Runs for every Ok(socket) 2. Stops on the FIRST Err() So any temporary io::Error will cause the entire server to terminate. This wrapper type for tokio::Incoming stops accepting new connections for a specified amount of time once an io::Error is encountered"]],"trait":[["Pattern","Pattern that can be matched to string."]]});