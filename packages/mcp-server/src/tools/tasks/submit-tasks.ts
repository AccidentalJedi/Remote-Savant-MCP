// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'submit_tasks',
  description: 'Submit a coding task to JrDevMCP for processing (e.g., write a function, debug code).',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Description of the task',
      },
      language: {
        type: 'string',
        description: 'Programming language for the task',
      },
      id: {
        type: 'string',
        description: 'Unique identifier for the task',
      },
      codeSnippet: {
        type: 'string',
        description: 'Optional code snippet to debug or modify',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tasks.submit(body);
};

export default { metadata, tool, handler };
