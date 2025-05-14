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
  name: 'update_research_sessions',
  description: 'Updates the details of a research session, such as its system prompt or current stage.',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      currentStage: {
        type: 'string',
        description: 'Updated stage of the research session',
        enum: ['initial', 'exploration', 'synthesis', 'refinement', 'conclusion'],
      },
      description: {
        type: 'string',
        description: 'Updated description of the research purpose',
      },
      name: {
        type: 'string',
        description: 'Updated name of the research session',
      },
      systemPrompt: {
        type: 'string',
        description: 'Updated system prompt for the session',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.update(sessionId, body);
};

export default { metadata, tool, handler };
