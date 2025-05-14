// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import check_health_health from './health/check-health-health';
import process_task_mcp from './mcp/process-task-mcp';
import process_task_direct_process from './process/process-task-direct-process';
import retrieve_task_result_tasks from './tasks/retrieve-task-result-tasks';
import submit_heavy_task_tasks from './tasks/submit-heavy-task-tasks';
import add_memory_entry_research_sessions from './research-sessions/add-memory-entry-research-sessions';
import create_session_research_sessions from './research-sessions/create-session-research-sessions';
import get_memory_thread_research_sessions from './research-sessions/get-memory-thread-research-sessions';
import list_iterative_tasks_research_sessions from './research-sessions/list-iterative-tasks-research-sessions';
import retrieve_session_research_sessions from './research-sessions/retrieve-session-research-sessions';
import search_memory_entries_research_sessions from './research-sessions/search-memory-entries-research-sessions';
import submit_iterative_task_research_sessions from './research-sessions/submit-iterative-task-research-sessions';
import update_session_research_sessions from './research-sessions/update-session-research-sessions';
import retrieve_configuration_config from './config/retrieve-configuration-config';
import update_configuration_config from './config/update-configuration-config';

export type HandlerFunction = (
  client: RemoteSavantMcp,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(check_health_health);
addEndpoint(process_task_mcp);
addEndpoint(process_task_direct_process);
addEndpoint(retrieve_task_result_tasks);
addEndpoint(submit_heavy_task_tasks);
addEndpoint(add_memory_entry_research_sessions);
addEndpoint(create_session_research_sessions);
addEndpoint(get_memory_thread_research_sessions);
addEndpoint(list_iterative_tasks_research_sessions);
addEndpoint(retrieve_session_research_sessions);
addEndpoint(search_memory_entries_research_sessions);
addEndpoint(submit_iterative_task_research_sessions);
addEndpoint(update_session_research_sessions);
addEndpoint(retrieve_configuration_config);
addEndpoint(update_configuration_config);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
