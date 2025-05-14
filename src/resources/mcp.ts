// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Mcp extends APIResource {
  /**
   * Processes requests via the Model Context Protocol for integration with VS Code
   * and Augment extension. Supports tools like code implementation, debugging, and
   * self-iteration capabilities with advanced reasoning. Uses local LLM or Gemini
   * Advanced binders based on configuration.
   *
   * @example
   * ```ts
   * const response = await client.mcp.process({
   *   parameters: {
   *     language: 'Python',
   *     requirements:
   *       'Write a function to calculate the factorial of a number',
   *     complexity: 'medium',
   *   },
   *   tool: 'code_implementation',
   * });
   * ```
   */
  process(body: McpProcessParams, options?: RequestOptions): APIPromise<McpProcessResponse> {
    return this._client.post('/mcp', { body, ...options });
  }
}

export interface McpProcessResponse {
  /**
   * Status of the request
   */
  status: 'success' | 'error';

  /**
   * Details of any self-corrections made during processing
   */
  corrections?: string;

  /**
   * Error message if the request failed
   */
  error?: string | null;

  /**
   * Evaluation metrics for the result (used in iterative tasks)
   */
  evaluationMetrics?: McpProcessResponse.EvaluationMetrics | null;

  /**
   * Status of the Gemini Advanced binder during processing
   */
  geminiStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Suggestions for improving the result (used in iterative tasks)
   */
  improvementSuggestions?: Array<string> | null;

  /**
   * Status of the local LLM binder during processing
   */
  localLlmStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Steps taken during iterative thinking and reasoning
   */
  reasoningSteps?: Array<string>;

  /**
   * Result of the task (e.g., generated code, debug output, session ID, etc.)
   */
  result?: Record<string, unknown>;

  /**
   * Self-reflection on the quality of the output
   */
  selfReflection?: string;
}

export namespace McpProcessResponse {
  /**
   * Evaluation metrics for the result (used in iterative tasks)
   */
  export interface EvaluationMetrics {
    adherenceToSystemPrompt?: number;

    completeness?: number;

    consistency?: number;

    overallScore?: number;

    progressFromPreviousIteration?: number;
  }
}

export interface McpProcessParams {
  /**
   * Parameters for the selected tool
   */
  parameters:
    | McpProcessParams.CodeImplementationParameters
    | McpProcessParams.CodeDebuggingParameters
    | McpProcessParams.CreateResearchSessionParameters
    | McpProcessParams.AddMemoryEntryParameters
    | McpProcessParams.SubmitIterativeTaskParameters
    | McpProcessParams.SearchMemoryParameters
    | McpProcessParams.GetMemoryThreadParameters;

  /**
   * The MCP tool to use for processing the request
   */
  tool:
    | 'code_implementation'
    | 'code_debugging'
    | 'create_research_session'
    | 'add_memory_entry'
    | 'submit_iterative_task'
    | 'search_memory'
    | 'get_memory_thread';

  /**
   * Whether to use Gemini API for advanced processing
   */
  useGemini?: boolean;
}

export namespace McpProcessParams {
  export interface CodeImplementationParameters {
    /**
     * Programming language for the task
     */
    language: string;

    /**
     * Requirements for the code implementation
     */
    requirements: string;

    /**
     * Task complexity (optional)
     */
    complexity?: 'low' | 'medium' | 'high' | null;
  }

  export interface CodeDebuggingParameters {
    /**
     * Code with issues to debug
     */
    code: string;

    /**
     * Programming language of the code
     */
    language: string;

    /**
     * Task complexity (optional)
     */
    complexity?: 'low' | 'medium' | 'high' | null;

    /**
     * Error message associated with the code (optional)
     */
    error?: string | null;
  }

  export interface CreateResearchSessionParameters {
    /**
     * Description of the research purpose
     */
    description: string;

    /**
     * Name of the research session
     */
    name: string;

    /**
     * System prompt to use for this research session
     */
    systemPrompt: string;
  }

  export interface AddMemoryEntryParameters {
    /**
     * Content of the memory entry
     */
    content: string;

    /**
     * ID of the research session
     */
    sessionId: string;

    /**
     * Type of memory entry
     */
    type: 'observation' | 'conclusion' | 'question' | 'task' | 'result';

    /**
     * Additional metadata for the entry
     */
    metadata?: Record<string, unknown> | null;

    /**
     * ID of the parent entry, if this is part of a thread
     */
    parentId?: string | null;
  }

  export interface SubmitIterativeTaskParameters {
    /**
     * ID of the research session
     */
    sessionId: string;

    /**
     * The task to process iteratively
     */
    task: Record<string, unknown>;

    /**
     * Maximum number of iterations to perform
     */
    maxIterations?: number | null;
  }

  export interface SearchMemoryParameters {
    /**
     * Search query
     */
    query: string;

    /**
     * ID of the research session
     */
    sessionId: string;

    /**
     * Number of entries per page
     */
    limit?: number;

    /**
     * Page number for pagination
     */
    page?: number;

    /**
     * Filter by memory entry type
     */
    typeFilter?: 'observation' | 'conclusion' | 'question' | 'task' | 'result' | null;
  }

  export interface GetMemoryThreadParameters {
    /**
     * ID of the memory entry to get the thread for
     */
    entryId: string;

    /**
     * ID of the research session
     */
    sessionId: string;
  }
}

export declare namespace Mcp {
  export { type McpProcessResponse as McpProcessResponse, type McpProcessParams as McpProcessParams };
}
