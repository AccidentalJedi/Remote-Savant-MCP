# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskRetrieveResultResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskSubmitHeavyResponse</a></code>

Methods:

- <code title="get /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">retrieveResult</a>(taskID) -> TaskRetrieveResultResponse</code>
- <code title="post /tasks/heavy">client.tasks.<a href="./src/resources/tasks.ts">submitHeavy</a>({ ...params }) -> TaskSubmitHeavyResponse</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">Configuration</a></code>

Methods:

- <code title="get /config">client.config.<a href="./src/resources/config.ts">retrieve</a>() -> Configuration</code>
- <code title="put /config">client.config.<a href="./src/resources/config.ts">update</a>({ ...params }) -> Configuration</code>
