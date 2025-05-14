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
  name: 'submit_heavy_tasks',
  description:
    'Submit a heavy task that requires Gemini Advanced for processing (e.g., complex API integration).',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Description of the heavy task',
      },
      geminiModel: {
        type: 'string',
        description: 'Gemini Advanced model to use for processing',
      },
      language: {
        type: 'string',
        description: 'Programming language for the task',
      },
      id: {
        type: 'string',
        description: 'Unique identifier for the heavy task',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tasks.submitHeavy(body);
};

export default { metadata, tool, handler };
