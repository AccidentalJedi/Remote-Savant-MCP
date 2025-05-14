// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'config',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_config',
  description: 'Update the configuration of JrDevMCP (e.g., change LLM endpoint, Gemini model).',
  inputSchema: {
    type: 'object',
    properties: {
      llmEndpoint: {
        type: 'string',
        description: 'Endpoint for the local LLM server (Ollama or LM Studio)',
      },
      geminiModel: {
        type: 'string',
        description: 'Gemini Advanced model used for heavy tasks',
      },
      llmModel: {
        type: 'string',
        description: 'Model name for the local LLM server',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.config.update(body);
};

export default { metadata, tool, handler };
