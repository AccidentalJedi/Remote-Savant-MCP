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
  name: 'get_memory_thread_research_sessions',
  description:
    'Retrieves a thread of memory entries starting from a specific entry, following the parent-child relationships.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      entryId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { entryId, ...body } = args as any;
  return client.researchSessions.getMemoryThread(entryId, body);
};

export default { metadata, tool, handler };
