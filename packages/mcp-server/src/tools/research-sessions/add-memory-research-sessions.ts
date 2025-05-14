// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'research_sessions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_memory_research_sessions',
  description: 'Adds a new memory entry to a research session, supporting context maintenance across tasks.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
        description: 'ID of the research session',
      },
      content: {
        type: 'string',
        description: 'Content of the memory entry',
      },
      type: {
        type: 'string',
        description: 'Type of memory entry',
        enum: ['observation', 'conclusion', 'question', 'task', 'result'],
      },
      metadata: {
        type: 'object',
        description: 'Additional metadata for the entry',
      },
      parentId: {
        type: 'string',
        description: 'ID of the parent entry, if this is part of a thread',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.addMemory(sessionId, body);
};

export default { metadata, tool, handler };
