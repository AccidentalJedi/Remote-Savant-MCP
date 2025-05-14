// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Retrieves the result of a submitted task, including binder statuses for local
   * and Gemini LLMs. Can be linked to a research session for additional context.
   *
   * @example
   * ```ts
   * const response = await client.tasks.retrieveResult(
   *   'task_123',
   * );
   * ```
   */
  retrieveResult(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResultResponse> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * Submits a heavy task that requires Gemini Advanced for processing (e.g., complex
   * API integration). Can be linked to a research session for memory management.
   * Uses Gemini Advanced binder exclusively.
   *
   * @example
   * ```ts
   * const response = await client.tasks.submitHeavy({
   *   description:
   *     'Integrate with an external API for real-time data processing',
   *   geminiModel: 'gemini-advanced',
   *   language: 'JavaScript',
   * });
   * ```
   */
  submitHeavy(body: TaskSubmitHeavyParams, options?: RequestOptions): APIPromise<TaskSubmitHeavyResponse> {
    return this._client.post('/tasks/heavy', { body, ...options });
  }
}

export interface TaskRetrieveResultResponse {
  /**
   * Task identifier
   */
  id: string;

  /**
   * Status of the task
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * Status of the Gemini Advanced binder during processing
   */
  geminiStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Status of the local LLM binder during processing
   */
  localLlmStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Logs or error messages from task execution
   */
  logs?: string;

  /**
   * Result of the task (e.g., generated code, debug output)
   */
  result?: string;

  /**
   * Associated research session ID, if any
   */
  sessionId?: string | null;
}

export interface TaskSubmitHeavyResponse {
  /**
   * Status of the Gemini Advanced binder during submission
   */
  geminiStatus: 'healthy' | 'unavailable' | 'error';

  taskId: string;
}

export interface TaskSubmitHeavyParams {
  /**
   * Description of the heavy task
   */
  description: string;

  /**
   * Gemini Advanced model to use for processing
   */
  geminiModel: string;

  /**
   * Programming language for the task
   */
  language: string;

  /**
   * Optional ID of the research session for context
   */
  sessionId?: string | null;
}

export declare namespace Tasks {
  export {
    type TaskRetrieveResultResponse as TaskRetrieveResultResponse,
    type TaskSubmitHeavyResponse as TaskSubmitHeavyResponse,
    type TaskSubmitHeavyParams as TaskSubmitHeavyParams,
  };
}
