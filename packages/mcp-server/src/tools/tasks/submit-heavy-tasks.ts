// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/heavy',
};

export const tool: Tool = {
  name: 'submit_heavy_tasks',
  description:
    'Submits a heavy task that requires Gemini Advanced for processing (e.g., complex API integration). Can be linked to a research session for memory management. Uses Gemini Advanced binder exclusively.',
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
      sessionId: {
        type: 'string',
        description: 'Optional ID of the research session for context',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tasks.submitHeavy(body);
};

export default { metadata, tool, handler };
