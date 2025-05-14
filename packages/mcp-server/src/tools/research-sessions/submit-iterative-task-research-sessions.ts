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
  name: 'submit_iterative_task_research_sessions',
  description:
    "Submits a task for iterative processing with self-iteration, using the research session's memory and advanced reasoning capabilities. Uses local LLM or Gemini Advanced binders based on configuration.",
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
        description: 'ID of the research session',
      },
      task: {
        type: 'object',
        description: 'The task to process iteratively',
      },
      maxIterations: {
        type: 'integer',
        description: 'Maximum number of iterations to perform',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const { sessionId, ...body } = args as any;
  return client.researchSessions.submitIterativeTask(sessionId, body);
};

export default { metadata, tool, handler };
