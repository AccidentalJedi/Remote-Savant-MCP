// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ResearchSessions extends APIResource {
  /**
   * Adds a new memory entry to a research session, supporting context maintenance
   * across tasks.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.addMemoryEntry(
   *     'session_123',
   *     {
   *       content:
   *         'Noticed that factorial function lacks input validation',
   *       body_sessionId: 'session_123',
   *       type: 'observation',
   *     },
   *   );
   * ```
   */
  addMemoryEntry(
    sessionID: string,
    body: ResearchSessionAddMemoryEntryParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSessionAddMemoryEntryResponse> {
    return this._client.post(path`/research-sessions/${sessionID}/memory`, { body, ...options });
  }

  /**
   * Creates a new research session for self-iterative tasks, enabling memory
   * management and iterative processing.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.createSession({
   *     description:
   *       'Research and implement an optimized factorial function',
   *     name: 'Factorial Function Research',
   *     systemPrompt:
   *       'You are a Junior Developer AI assistant focused on writing optimized code...',
   *   });
   * ```
   */
  createSession(
    body: ResearchSessionCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSessionCreateSessionResponse> {
    return this._client.post('/research-sessions', { body, ...options });
  }

  /**
   * Retrieves a thread of memory entries starting from a specific entry, following
   * the parent-child relationships.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.getMemoryThread(
   *     'memory_456',
   *     { sessionId: 'session_123' },
   *   );
   * ```
   */
  getMemoryThread(
    entryID: string,
    params: ResearchSessionGetMemoryThreadParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSessionGetMemoryThreadResponse> {
    const { sessionId } = params;
    return this._client.get(path`/research-sessions/${sessionId}/memory/${entryID}/thread`, options);
  }

  /**
   * Lists the status of ongoing iterative tasks in a research session, including
   * binder statuses for local and Gemini LLMs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.listIterativeTasks(
   *     'session_123',
   *   );
   * ```
   */
  listIterativeTasks(
    sessionID: string,
    query: ResearchSessionListIterativeTasksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResearchSessionListIterativeTasksResponse> {
    return this._client.get(path`/research-sessions/${sessionID}/iterative-tasks`, { query, ...options });
  }

  /**
   * Retrieves the details of a research session, including its memory entries and
   * status.
   *
   * @example
   * ```ts
   * const researchSession =
   *   await client.researchSessions.retrieveSession(
   *     'session_123',
   *   );
   * ```
   */
  retrieveSession(sessionID: string, options?: RequestOptions): APIPromise<ResearchSession> {
    return this._client.get(path`/research-sessions/${sessionID}`, options);
  }

  /**
   * Searches for memory entries in a research session with pagination and filtering
   * options.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.searchMemoryEntries(
   *     'session_123',
   *     { query: 'factorial' },
   *   );
   * ```
   */
  searchMemoryEntries(
    sessionID: string,
    query: ResearchSessionSearchMemoryEntriesParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSessionSearchMemoryEntriesResponse> {
    return this._client.get(path`/research-sessions/${sessionID}/memory`, { query, ...options });
  }

  /**
   * Submits a task for iterative processing with self-iteration, using the research
   * session's memory and advanced reasoning capabilities. Uses local LLM or Gemini
   * Advanced binders based on configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.researchSessions.submitIterativeTask(
   *     'session_123',
   *     {
   *       body_sessionId: 'session_123',
   *       task: { language: 'bar', requirements: 'bar' },
   *     },
   *   );
   * ```
   */
  submitIterativeTask(
    sessionID: string,
    body: ResearchSessionSubmitIterativeTaskParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSessionSubmitIterativeTaskResponse> {
    return this._client.post(path`/research-sessions/${sessionID}/iterative-tasks`, { body, ...options });
  }

  /**
   * Updates the details of a research session, such as its system prompt or current
   * stage.
   *
   * @example
   * ```ts
   * const researchSession =
   *   await client.researchSessions.updateSession(
   *     'session_123',
   *   );
   * ```
   */
  updateSession(
    sessionID: string,
    body: ResearchSessionUpdateSessionParams,
    options?: RequestOptions,
  ): APIPromise<ResearchSession> {
    return this._client.put(path`/research-sessions/${sessionID}`, { body, ...options });
  }
}

export interface IterativeTaskStatus {
  /**
   * Number of iterations completed
   */
  iterationsCompleted: number;

  /**
   * Timestamp of the last update (Unix epoch in milliseconds)
   */
  lastUpdated: number;

  /**
   * Maximum number of iterations for the task
   */
  maxIterations: number;

  /**
   * ID of the research session
   */
  sessionId: string;

  /**
   * Current status of the task
   */
  status: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Unique identifier for the iterative task
   */
  taskId: string;

  /**
   * Status of the Gemini Advanced binder during processing
   */
  geminiStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Status of the local LLM binder during processing
   */
  localLlmStatus?: 'healthy' | 'unavailable' | 'error' | null;
}

export interface MemoryEntry {
  /**
   * Unique identifier for the memory entry
   */
  id: string;

  /**
   * Content of the memory entry
   */
  content: string;

  /**
   * Additional metadata for the entry
   */
  metadata: Record<string, unknown>;

  /**
   * Timestamp of the entry (Unix epoch in milliseconds)
   */
  timestamp: number;

  /**
   * Type of memory entry
   */
  type: 'observation' | 'conclusion' | 'question' | 'task' | 'result';

  /**
   * ID of the parent entry, if this is part of a thread
   */
  parentId?: string | null;
}

export interface ResearchSession {
  /**
   * Unique identifier for the research session
   */
  id: string;

  /**
   * Timestamp of session creation (Unix epoch in milliseconds)
   */
  createdAt: number;

  /**
   * Current stage of the research session
   */
  currentStage: 'initial' | 'exploration' | 'synthesis' | 'refinement' | 'conclusion';

  /**
   * Description of the research purpose
   */
  description: string;

  /**
   * Number of iterations performed in the session
   */
  iterations: number;

  /**
   * Memory entries in the session
   */
  memory: Array<MemoryEntry>;

  /**
   * Name of the research session
   */
  name: string;

  /**
   * Log of status changes in the session
   */
  statusLogs: Array<string>;

  /**
   * System prompt for the session
   */
  systemPrompt: string;

  /**
   * Timestamp of last session update (Unix epoch in milliseconds)
   */
  updatedAt: number;
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

export interface ResearchSessionAddMemoryEntryResponse {
  /**
   * Unique identifier for the created memory entry
   */
  entryId: string;
}

export interface ResearchSessionCreateSessionResponse {
  /**
   * Unique identifier for the created session
   */
  sessionId: string;
}

export interface ResearchSessionGetMemoryThreadResponse {
  thread: Array<MemoryEntry>;
}

export interface ResearchSessionListIterativeTasksResponse {
  tasks: Array<IterativeTaskStatus>;
}

export interface ResearchSessionSearchMemoryEntriesResponse {
  entries: Array<MemoryEntry>;

  /**
   * Number of entries per page
   */
  limit: number;

  /**
   * Current page number
   */
  page: number;

  /**
   * Total number of matching entries
   */
  total: number;
}

export interface ResearchSessionSubmitIterativeTaskResponse {
  /**
   * Unique identifier for the submitted task
   */
  taskId: string;

  /**
   * Status of the Gemini Advanced binder during submission
   */
  geminiStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Status of the local LLM binder during submission
   */
  localLlmStatus?: 'healthy' | 'unavailable' | 'error' | null;
}

export interface ResearchSessionAddMemoryEntryParams {
  /**
   * Content of the memory entry
   */
  content: string;

  /**
   * ID of the research session
   */
  body_sessionId: string;

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

export interface ResearchSessionCreateSessionParams {
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

export interface ResearchSessionGetMemoryThreadParams {
  /**
   * ID of the research session
   */
  sessionId: string;
}

export interface ResearchSessionListIterativeTasksParams {
  /**
   * Filter tasks by status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface ResearchSessionSearchMemoryEntriesParams {
  /**
   * Search query
   */
  query: string;

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
  typeFilter?: 'observation' | 'conclusion' | 'question' | 'task' | 'result';
}

export interface ResearchSessionSubmitIterativeTaskParams {
  /**
   * ID of the research session
   */
  body_sessionId: string;

  /**
   * The task to process iteratively
   */
  task: Record<string, unknown>;

  /**
   * Maximum number of iterations to perform
   */
  maxIterations?: number | null;
}

export interface ResearchSessionUpdateSessionParams {
  /**
   * Updated stage of the research session
   */
  currentStage?: 'initial' | 'exploration' | 'synthesis' | 'refinement' | 'conclusion';

  /**
   * Updated description of the research purpose
   */
  description?: string;

  /**
   * Updated name of the research session
   */
  name?: string;

  /**
   * Updated system prompt for the session
   */
  systemPrompt?: string;
}

export declare namespace ResearchSessions {
  export {
    type IterativeTaskStatus as IterativeTaskStatus,
    type MemoryEntry as MemoryEntry,
    type ResearchSession as ResearchSession,
    type SubmitIterativeTaskParameters as SubmitIterativeTaskParameters,
    type ResearchSessionAddMemoryEntryResponse as ResearchSessionAddMemoryEntryResponse,
    type ResearchSessionCreateSessionResponse as ResearchSessionCreateSessionResponse,
    type ResearchSessionGetMemoryThreadResponse as ResearchSessionGetMemoryThreadResponse,
    type ResearchSessionListIterativeTasksResponse as ResearchSessionListIterativeTasksResponse,
    type ResearchSessionSearchMemoryEntriesResponse as ResearchSessionSearchMemoryEntriesResponse,
    type ResearchSessionSubmitIterativeTaskResponse as ResearchSessionSubmitIterativeTaskResponse,
    type ResearchSessionAddMemoryEntryParams as ResearchSessionAddMemoryEntryParams,
    type ResearchSessionCreateSessionParams as ResearchSessionCreateSessionParams,
    type ResearchSessionGetMemoryThreadParams as ResearchSessionGetMemoryThreadParams,
    type ResearchSessionListIterativeTasksParams as ResearchSessionListIterativeTasksParams,
    type ResearchSessionSearchMemoryEntriesParams as ResearchSessionSearchMemoryEntriesParams,
    type ResearchSessionSubmitIterativeTaskParams as ResearchSessionSubmitIterativeTaskParams,
    type ResearchSessionUpdateSessionParams as ResearchSessionUpdateSessionParams,
  };
}
