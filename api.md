# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Mcp

Types:

- <code><a href="./src/resources/mcp.ts">McpProcessResponse</a></code>

Methods:

- <code title="post /mcp">client.mcp.<a href="./src/resources/mcp.ts">process</a>({ ...params }) -> McpProcessResponse</code>

# Process

Types:

- <code><a href="./src/resources/process.ts">ProcessProcessDirectResponse</a></code>

Methods:

- <code title="post /process">client.process.<a href="./src/resources/process.ts">processDirect</a>({ ...params }) -> ProcessProcessDirectResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskRetrieveResultResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskSubmitHeavyResponse</a></code>

Methods:

- <code title="get /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">retrieveResult</a>(taskID) -> TaskRetrieveResultResponse</code>
- <code title="post /tasks/heavy">client.tasks.<a href="./src/resources/tasks.ts">submitHeavy</a>({ ...params }) -> TaskSubmitHeavyResponse</code>

# ResearchSessions

Types:

- <code><a href="./src/resources/research-sessions.ts">IterativeTaskStatus</a></code>
- <code><a href="./src/resources/research-sessions.ts">MemoryEntry</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSession</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionCreateResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionAddMemoryResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionGetMemoryThreadResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionListIterativeTasksResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionSearchMemoryResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionSubmitIterativeTaskResponse</a></code>

Methods:

- <code title="post /research-sessions">client.researchSessions.<a href="./src/resources/research-sessions.ts">create</a>({ ...params }) -> ResearchSessionCreateResponse</code>
- <code title="get /research-sessions/{sessionId}">client.researchSessions.<a href="./src/resources/research-sessions.ts">retrieve</a>(sessionID) -> ResearchSession</code>
- <code title="put /research-sessions/{sessionId}">client.researchSessions.<a href="./src/resources/research-sessions.ts">update</a>(sessionID, { ...params }) -> ResearchSession</code>
- <code title="post /research-sessions/{sessionId}/memory">client.researchSessions.<a href="./src/resources/research-sessions.ts">addMemory</a>(sessionID, { ...params }) -> ResearchSessionAddMemoryResponse</code>
- <code title="get /research-sessions/{sessionId}/memory/{entryId}/thread">client.researchSessions.<a href="./src/resources/research-sessions.ts">getMemoryThread</a>(entryID, { ...params }) -> ResearchSessionGetMemoryThreadResponse</code>
- <code title="get /research-sessions/{sessionId}/iterative-tasks">client.researchSessions.<a href="./src/resources/research-sessions.ts">listIterativeTasks</a>(sessionID, { ...params }) -> ResearchSessionListIterativeTasksResponse</code>
- <code title="get /research-sessions/{sessionId}/memory">client.researchSessions.<a href="./src/resources/research-sessions.ts">searchMemory</a>(sessionID, { ...params }) -> ResearchSessionSearchMemoryResponse</code>
- <code title="post /research-sessions/{sessionId}/iterative-tasks">client.researchSessions.<a href="./src/resources/research-sessions.ts">submitIterativeTask</a>(sessionID, { ...params }) -> ResearchSessionSubmitIterativeTaskResponse</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">Configuration</a></code>

Methods:

- <code title="get /config">client.config.<a href="./src/resources/config.ts">retrieve</a>() -> Configuration</code>
- <code title="put /config">client.config.<a href="./src/resources/config.ts">update</a>({ ...params }) -> Configuration</code>
