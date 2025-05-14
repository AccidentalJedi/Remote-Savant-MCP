// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import RemoteSavantMcp from 'remote-savant-mcp';

export const metadata: Metadata = {
  resource: 'process',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'process_direct_process',
  description:
    'Directly processes tasks for testing purposes, bypassing MCP protocol. Supports the same tools and reasoning capabilities as the MCP endpoint, including self-iteration tools. Uses local LLM or Gemini Advanced binders based on configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      parameters: {
        anyOf: [
          {
            type: 'object',
            properties: {
              language: {
                type: 'string',
                description: 'Programming language for the task',
              },
              requirements: {
                type: 'string',
                description: 'Requirements for the code implementation',
              },
              complexity: {
                type: 'string',
                description: 'Task complexity (optional)',
                enum: ['low', 'medium', 'high'],
              },
            },
            required: ['language', 'requirements'],
          },
          {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                description: 'Code with issues to debug',
              },
              language: {
                type: 'string',
                description: 'Programming language of the code',
              },
              complexity: {
                type: 'string',
                description: 'Task complexity (optional)',
                enum: ['low', 'medium', 'high'],
              },
              error: {
                type: 'string',
                description: 'Error message associated with the code (optional)',
              },
            },
            required: ['code', 'language'],
          },
          {
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
            required: ['description', 'name', 'systemPrompt'],
          },
          {
            type: 'object',
            properties: {
              content: {
                type: 'string',
                description: 'Content of the memory entry',
              },
              sessionId: {
                type: 'string',
                description: 'ID of the research session',
              },
              type: {
                type: 'string',
                description: 'Type of memory entry',
                enum: ['observation', 'conclusion', 'question', 'task', 'result'],
              },
              metadata: {
                type: 'object',
                description: 'Additional metadata for the entry',
              },
              parentId: {
                type: 'string',
                description: 'ID of the parent entry, if this is part of a thread',
              },
            },
            required: ['content', 'sessionId', 'type'],
          },
          {
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
            required: ['sessionId', 'task'],
          },
          {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query',
              },
              sessionId: {
                type: 'string',
                description: 'ID of the research session',
              },
              limit: {
                type: 'integer',
                description: 'Number of entries per page',
              },
              page: {
                type: 'integer',
                description: 'Page number for pagination',
              },
              typeFilter: {
                type: 'string',
                description: 'Filter by memory entry type',
                enum: ['observation', 'conclusion', 'question', 'task', 'result'],
              },
            },
            required: ['query', 'sessionId'],
          },
          {
            type: 'object',
            properties: {
              entryId: {
                type: 'string',
                description: 'ID of the memory entry to get the thread for',
              },
              sessionId: {
                type: 'string',
                description: 'ID of the research session',
              },
            },
            required: ['entryId', 'sessionId'],
          },
        ],
        description: 'Parameters for the selected tool',
      },
      tool: {
        type: 'string',
        description: 'The MCP tool to use for processing the request',
        enum: [
          'code_implementation',
          'code_debugging',
          'create_research_session',
          'add_memory_entry',
          'submit_iterative_task',
          'search_memory',
          'get_memory_thread',
        ],
      },
      useGemini: {
        type: 'boolean',
        description: 'Whether to use Gemini API for advanced processing',
      },
    },
  },
};

export const handler = (client: RemoteSavantMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.process.processDirect(body);
};

export default { metadata, tool, handler };
