// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Process extends APIResource {
  /**
   * Directly processes tasks for testing purposes, bypassing MCP protocol. Supports
   * the same tools and reasoning capabilities as the MCP endpoint, including
   * self-iteration tools. Uses local LLM or Gemini Advanced binders based on
   * configuration.
   *
   * @example
   * ```ts
   * const response = await client.process.processDirect({
   *   parameters: {
   *     language: 'JavaScript',
   *     code: 'function factorial(n) { return n * factorial(n-1); }',
   *     error: 'RangeError: Maximum call stack size exceeded',
   *     complexity: 'high',
   *   },
   *   tool: 'code_debugging',
   *   useGemini: true,
   * });
   * ```
   */
  processDirect(
    body: ProcessProcessDirectParams,
    options?: RequestOptions,
  ): APIPromise<ProcessProcessDirectResponse> {
    return this._client.post('/process', { body, ...options });
  }
}

export interface ProcessProcessDirectResponse {
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
  evaluationMetrics?: ProcessProcessDirectResponse.EvaluationMetrics | null;

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

export namespace ProcessProcessDirectResponse {
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

export interface ProcessProcessDirectParams {
  /**
   * Parameters for the selected tool
   */
  parameters:
    | ProcessProcessDirectParams.CodeImplementationParameters
    | ProcessProcessDirectParams.CodeDebuggingParameters
    | ProcessProcessDirectParams.CreateResearchSessionParameters
    | ProcessProcessDirectParams.AddMemoryEntryParameters
    | ProcessProcessDirectParams.SubmitIterativeTaskParameters
    | ProcessProcessDirectParams.SearchMemoryParameters
    | ProcessProcessDirectParams.GetMemoryThreadParameters;

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

export namespace ProcessProcessDirectParams {
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

export declare namespace Process {
  export {
    type ProcessProcessDirectResponse as ProcessProcessDirectResponse,
    type ProcessProcessDirectParams as ProcessProcessDirectParams,
  };
}
