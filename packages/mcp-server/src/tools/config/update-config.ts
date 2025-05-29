// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/config',
};

export const tool: Tool = {
  name: 'update_config',
  description:
    'Update the configuration of JrDevMCP, including binder settings for local LLM (Ollama/LM Studio) and Gemini Advanced.',
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
      geminiConnectionPoolSize: {
        type: 'integer',
        description: 'Connection pool size for Gemini API binder',
      },
      geminiModel: {
        type: 'string',
        description: 'Gemini model used for advanced processing (if enabled)',
      },
      geminiRetries: {
        type: 'integer',
        description: 'Number of retries for Gemini API binder requests',
      },
      geminiTimeout: {
        type: 'integer',
        description: 'Timeout in seconds for Gemini API binder requests',
      },
      llmModel: {
        type: 'string',
        description: 'Model name for the local LLM server',
      },
      localLlmConnectionPoolSize: {
        type: 'integer',
        description: 'Connection pool size for local LLM binder',
      },
      localLlmRetries: {
        type: 'integer',
        description: 'Number of retries for local LLM binder requests',
      },
      localLlmTimeout: {
        type: 'integer',
        description: 'Timeout in seconds for local LLM binder requests',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.config.update(body);
};

export default { metadata, tool, handler };
