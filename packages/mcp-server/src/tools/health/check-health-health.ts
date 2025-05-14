// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'health',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'check_health_health',
  description:
    'Check the health status of the JrDevMCP server, including binder statuses for local and Gemini LLMs.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  return client.health.checkHealth();
};

export default { metadata, tool, handler };
