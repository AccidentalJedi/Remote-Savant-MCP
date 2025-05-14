# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckHealthResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">checkHealth</a>() -> HealthCheckHealthResponse</code>

# Mcp

Types:

- <code><a href="./src/resources/mcp.ts">McpRequest</a></code>
- <code><a href="./src/resources/mcp.ts">McpResponse</a></code>

Methods:

- <code title="post /mcp">client.mcp.<a href="./src/resources/mcp.ts">processTask</a>({ ...params }) -> McpResponse</code>

# Process

Types:

- <code><a href="./src/resources/process.ts">McpRequest</a></code>
- <code><a href="./src/resources/process.ts">McpResponse</a></code>

Methods:

- <code title="post /process">client.process.<a href="./src/resources/process.ts">processTaskDirect</a>({ ...params }) -> McpResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">HeavyTaskRequest</a></code>
- <code><a href="./src/resources/tasks.ts">TaskResult</a></code>
- <code><a href="./src/resources/tasks.ts">TaskSubmitHeavyTaskResponse</a></code>

Methods:

- <code title="get /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">retrieveTaskResult</a>(taskID) -> TaskResult</code>
- <code title="post /tasks/heavy">client.tasks.<a href="./src/resources/tasks.ts">submitHeavyTask</a>({ ...params }) -> TaskSubmitHeavyTaskResponse</code>

# ResearchSessions

Types:

- <code><a href="./src/resources/research-sessions.ts">IterativeTaskStatus</a></code>
- <code><a href="./src/resources/research-sessions.ts">MemoryEntry</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSession</a></code>
- <code><a href="./src/resources/research-sessions.ts">SubmitIterativeTaskParameters</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionAddMemoryEntryResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionCreateSessionResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionGetMemoryThreadResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionListIterativeTasksResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionSearchMemoryEntriesResponse</a></code>
- <code><a href="./src/resources/research-sessions.ts">ResearchSessionSubmitIterativeTaskResponse</a></code>

Methods:

- <code title="post /research-sessions/{sessionId}/memory">client.researchSessions.<a href="./src/resources/research-sessions.ts">addMemoryEntry</a>(sessionID, { ...params }) -> ResearchSessionAddMemoryEntryResponse</code>
- <code title="post /research-sessions">client.researchSessions.<a href="./src/resources/research-sessions.ts">createSession</a>({ ...params }) -> ResearchSessionCreateSessionResponse</code>
- <code title="get /research-sessions/{sessionId}/memory/{entryId}/thread">client.researchSessions.<a href="./src/resources/research-sessions.ts">getMemoryThread</a>(entryID, { ...params }) -> ResearchSessionGetMemoryThreadResponse</code>
- <code title="get /research-sessions/{sessionId}/iterative-tasks">client.researchSessions.<a href="./src/resources/research-sessions.ts">listIterativeTasks</a>(sessionID, { ...params }) -> ResearchSessionListIterativeTasksResponse</code>
- <code title="get /research-sessions/{sessionId}">client.researchSessions.<a href="./src/resources/research-sessions.ts">retrieveSession</a>(sessionID) -> ResearchSession</code>
- <code title="get /research-sessions/{sessionId}/memory">client.researchSessions.<a href="./src/resources/research-sessions.ts">searchMemoryEntries</a>(sessionID, { ...params }) -> ResearchSessionSearchMemoryEntriesResponse</code>
- <code title="post /research-sessions/{sessionId}/iterative-tasks">client.researchSessions.<a href="./src/resources/research-sessions.ts">submitIterativeTask</a>(sessionID, { ...params }) -> ResearchSessionSubmitIterativeTaskResponse</code>
- <code title="put /research-sessions/{sessionId}">client.researchSessions.<a href="./src/resources/research-sessions.ts">updateSession</a>(sessionID, { ...params }) -> ResearchSession</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">Configuration</a></code>

Methods:

- <code title="get /config">client.config.<a href="./src/resources/config.ts">retrieveConfiguration</a>() -> Configuration</code>
- <code title="put /config">client.config.<a href="./src/resources/config.ts">updateConfiguration</a>({ ...params }) -> Configuration</code>
