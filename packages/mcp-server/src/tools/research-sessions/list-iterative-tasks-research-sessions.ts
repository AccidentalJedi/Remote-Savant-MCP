// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'research_sessions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_iterative_tasks_research_sessions',
  description:
    'Lists the status of ongoing iterative tasks in a research session, including binder statuses for local and Gemini LLMs.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      status: {
        type: 'string',
        description: 'Filter tasks by status',
        enum: ['pending', 'processing', 'completed', 'failed'],
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.listIterativeTasks(sessionId, body);
};

export default { metadata, tool, handler };
