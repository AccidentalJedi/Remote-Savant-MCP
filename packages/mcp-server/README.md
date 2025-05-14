# Remote Savant Mcp TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:AccidentalJedi/Remote-Savant-MCP.git
cd Remote-Savant-MCP
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export REMOTE_SAVANT_MCP_API_KEY="My API Key"
export REMOTE_SAVANT_MCP_TIMEOUT="0"
export REMOTE_SAVANT_MCP_RETRIES="0"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y remote-savant-mcp-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "remote_savant_mcp_api": {
      "command": "node",
      "args": ["/path/to/local/Remote-Savant-MCP/packages/mcp-server", "--client=claude", "--tools=all"],
      "env": {
        "REMOTE_SAVANT_MCP_API_KEY": "My API Key",
        "REMOTE_SAVANT_MCP_TIMEOUT": "0",
        "REMOTE_SAVANT_MCP_RETRIES": "0"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "remote-savant-mcp-mcp/server";

// import a specific tool
import checkHealthHealth from "remote-savant-mcp-mcp/tools/health/check-health-health";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [checkHealthHealth, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `health`:

- `check_health_health` (`read`): Check the health status of the JrDevMCP server, including binder statuses for local and Gemini LLMs.

### Resource `mcp`:

- `process_task_mcp` (`write`): Processes requests via the Model Context Protocol for integration with VS Code and Augment extension. Supports tools like code implementation, debugging, and self-iteration capabilities with advanced reasoning. Uses local LLM or Gemini Advanced binders based on configuration.

### Resource `process`:

- `process_task_direct_process` (`write`): Directly processes tasks for testing purposes, bypassing MCP protocol. Supports the same tools and reasoning capabilities as the MCP endpoint, including self-iteration tools. Uses local LLM or Gemini Advanced binders based on configuration.

### Resource `tasks`:

- `retrieve_task_result_tasks` (`read`): Retrieves the result of a submitted task, including binder statuses for local and Gemini LLMs. Can be linked to a research session for additional context.
- `submit_heavy_task_tasks` (`write`): Submits a heavy task that requires Gemini Advanced for processing (e.g., complex API integration). Can be linked to a research session for memory management. Uses Gemini Advanced binder exclusively.

### Resource `research_sessions`:

- `add_memory_entry_research_sessions` (`write`): Adds a new memory entry to a research session, supporting context maintenance across tasks.
- `create_session_research_sessions` (`write`): Creates a new research session for self-iterative tasks, enabling memory management and iterative processing.
- `get_memory_thread_research_sessions` (`read`): Retrieves a thread of memory entries starting from a specific entry, following the parent-child relationships.
- `list_iterative_tasks_research_sessions` (`read`): Lists the status of ongoing iterative tasks in a research session, including binder statuses for local and Gemini LLMs.
- `retrieve_session_research_sessions` (`read`): Retrieves the details of a research session, including its memory entries and status.
- `search_memory_entries_research_sessions` (`read`): Searches for memory entries in a research session with pagination and filtering options.
- `submit_iterative_task_research_sessions` (`write`): Submits a task for iterative processing with self-iteration, using the research session's memory and advanced reasoning capabilities. Uses local LLM or Gemini Advanced binders based on configuration.
- `update_session_research_sessions` (`write`): Updates the details of a research session, such as its system prompt or current stage.

### Resource `config`:

- `retrieve_configuration_config` (`read`): Get the current configuration of JrDevMCP, including binder settings for local LLM (Ollama/LM Studio) and Gemini Advanced.
- `update_configuration_config` (`write`): Update the configuration of JrDevMCP, including binder settings for local LLM (Ollama/LM Studio) and Gemini Advanced.
