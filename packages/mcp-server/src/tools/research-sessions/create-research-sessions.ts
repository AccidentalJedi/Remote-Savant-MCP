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
  name: 'create_research_sessions',
  description:
    'Creates a new research session for self-iterative tasks, enabling memory management and iterative processing.',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Description of the research purpose',
      },
      name: {
        type: 'string',
        description: 'Name of the research session',
      },
      systemPrompt: {
        type: 'string',
        description: 'System prompt to use for this research session',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.researchSessions.create(body);
};

export default { metadata, tool, handler };
