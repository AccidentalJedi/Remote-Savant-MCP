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
  name: 'search_memory_entries_research_sessions',
  description: 'Searches for memory entries in a research session with pagination and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      query: {
        type: 'string',
        description: 'Search query',
      },
      limit: {
        type: 'integer',
        description: 'Number of entries per page',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      typeFilter: {
        type: 'string',
        description: 'Filter by memory entry type',
        enum: ['observation', 'conclusion', 'question', 'task', 'result'],
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.searchMemoryEntries(sessionId, body);
};

export default { metadata, tool, handler };
