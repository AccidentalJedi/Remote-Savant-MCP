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
  description:
    'Update the configuration of JrDevMCP (e.g., change LLM endpoint, Gemini settings, self-iteration settings).',
  inputSchema: {
    type: 'object',
    properties: {
      llmEndpoint: {
        type: 'string',
        description: 'Endpoint for the local LLM server (Ollama or LM Studio)',
      },
      maxIterationsDefault: {
        type: 'integer',
        description: 'Default maximum number of iterations for iterative tasks',
      },
      systemPrompt: {
        type: 'string',
        description: "System prompt defining the MCP server's behavior",
      },
      geminiApiKey: {
        type: 'string',
        description: 'API key for Gemini API (if enabled)',
      },
      geminiModel: {
        type: 'string',
        description: 'Gemini model used for advanced processing (if enabled)',
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
