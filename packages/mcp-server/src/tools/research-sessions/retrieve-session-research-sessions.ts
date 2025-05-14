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
  name: 'retrieve_session_research_sessions',
  description: 'Retrieves the details of a research session, including its memory entries and status.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.retrieveSession(sessionId);
};

export default { metadata, tool, handler };
