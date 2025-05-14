// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Config extends APIResource {
  /**
   * Get the current configuration of JrDevMCP, including binder settings for local
   * LLM (Ollama/LM Studio) and Gemini Advanced.
   *
   * @example
   * ```ts
   * const configuration = await client.config.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Configuration> {
    return this._client.get('/config', options);
  }

  /**
   * Update the configuration of JrDevMCP, including binder settings for local LLM
   * (Ollama/LM Studio) and Gemini Advanced.
   *
   * @example
   * ```ts
   * const configuration = await client.config.update({
   *   llmEndpoint: 'http://localhost:11434',
   *   maxIterationsDefault: 3,
   *   systemPrompt:
   *     "You are a Junior Developer AI assistant named 'JrDevMCP,' working as a Model Context Protocol (MCP) server compatible with VS Code and the Augment extension...",
   * });
   * ```
   */
  update(body: ConfigUpdateParams, options?: RequestOptions): APIPromise<Configuration> {
    return this._client.put('/config', { body, ...options });
  }
}

export interface Configuration {
  /**
   * Endpoint for the local LLM server (Ollama or LM Studio)
   */
  llmEndpoint: string;

  /**
   * Default maximum number of iterations for iterative tasks
   */
  maxIterationsDefault: number;

  /**
   * System prompt defining the MCP server's behavior
   */
  systemPrompt: string;

  /**
   * API key for Gemini API (if enabled)
   */
  geminiApiKey?: string | null;

  /**
   * Connection pool size for Gemini API binder
   */
  geminiConnectionPoolSize?: number;

  /**
   * Gemini model used for advanced processing (if enabled)
   */
  geminiModel?: string | null;

  /**
   * Number of retries for Gemini API binder requests
   */
  geminiRetries?: number;

  /**
   * Timeout in seconds for Gemini API binder requests
   */
  geminiTimeout?: number;

  /**
   * Model name for the local LLM server
   */
  llmModel?: string;

  /**
   * Connection pool size for local LLM binder
   */
  localLlmConnectionPoolSize?: number;

  /**
   * Number of retries for local LLM binder requests
   */
  localLlmRetries?: number;

  /**
   * Timeout in seconds for local LLM binder requests
   */
  localLlmTimeout?: number;
}

export interface ConfigUpdateParams {
  /**
   * Endpoint for the local LLM server (Ollama or LM Studio)
   */
  llmEndpoint: string;

  /**
   * Default maximum number of iterations for iterative tasks
   */
  maxIterationsDefault: number;

  /**
   * System prompt defining the MCP server's behavior
   */
  systemPrompt: string;

  /**
   * API key for Gemini API (if enabled)
   */
  geminiApiKey?: string | null;

  /**
   * Connection pool size for Gemini API binder
   */
  geminiConnectionPoolSize?: number;

  /**
   * Gemini model used for advanced processing (if enabled)
   */
  geminiModel?: string | null;

  /**
   * Number of retries for Gemini API binder requests
   */
  geminiRetries?: number;

  /**
   * Timeout in seconds for Gemini API binder requests
   */
  geminiTimeout?: number;

  /**
   * Model name for the local LLM server
   */
  llmModel?: string;

  /**
   * Connection pool size for local LLM binder
   */
  localLlmConnectionPoolSize?: number;

  /**
   * Number of retries for local LLM binder requests
   */
  localLlmRetries?: number;

  /**
   * Timeout in seconds for local LLM binder requests
   */
  localLlmTimeout?: number;
}

export declare namespace Config {
  export { type Configuration as Configuration, type ConfigUpdateParams as ConfigUpdateParams };
}
