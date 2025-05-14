// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Get the status and result of a submitted task.
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
   * Submit a coding task to JrDevMCP for processing (e.g., write a function, debug
   * code).
   *
   * @example
   * ```ts
   * const response = await client.tasks.submit({
   *   description:
   *     'Write a function to calculate the factorial of a number',
   *   language: 'Python',
   * });
   * ```
   */
  submit(body: TaskSubmitParams, options?: RequestOptions): APIPromise<TaskSubmitResponse> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Submit a heavy task that requires Gemini Advanced for processing (e.g., complex
   * API integration).
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
   * Logs or error messages from task execution
   */
  logs?: string;

  /**
   * Result of the task (e.g., generated code, debug output)
   */
  result?: string;
}

export interface TaskSubmitResponse {
  taskId?: string;
}

export interface TaskSubmitHeavyResponse {
  taskId?: string;
}

export interface TaskSubmitParams {
  /**
   * Description of the task
   */
  description: string;

  /**
   * Programming language for the task
   */
  language: string;

  /**
   * Unique identifier for the task
   */
  id?: string;

  /**
   * Optional code snippet to debug or modify
   */
  codeSnippet?: string;
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
   * Unique identifier for the heavy task
   */
  id?: string;
}

export declare namespace Tasks {
  export {
    type TaskRetrieveResultResponse as TaskRetrieveResultResponse,
    type TaskSubmitResponse as TaskSubmitResponse,
    type TaskSubmitHeavyResponse as TaskSubmitHeavyResponse,
    type TaskSubmitParams as TaskSubmitParams,
    type TaskSubmitHeavyParams as TaskSubmitHeavyParams,
  };
}
