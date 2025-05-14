// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_task_result_tasks',
  description:
    'Retrieves the result of a submitted task, including binder statuses for local and Gemini LLMs. Can be linked to a research session for additional context.',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { taskId, ...body } = args as any;
  return client.tasks.retrieveTaskResult(taskId);
};

export default { metadata, tool, handler };
