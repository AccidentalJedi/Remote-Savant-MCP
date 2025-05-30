// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/config',
};

export const tool: Tool = {
  name: 'retrieve_config',
  description:
    'Get the current configuration of JrDevMCP, including binder settings for local LLM (Ollama/LM Studio) and Gemini Advanced.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  return client.config.retrieve();
};

export default { metadata, tool, handler };
