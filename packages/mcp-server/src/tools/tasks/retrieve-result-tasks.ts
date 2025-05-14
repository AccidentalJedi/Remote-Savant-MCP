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
  name: 'retrieve_result_tasks',
  description: 'Get the status and result of a submitted task.',
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
  return client.tasks.retrieveResult(taskId);
};

export default { metadata, tool, handler };
