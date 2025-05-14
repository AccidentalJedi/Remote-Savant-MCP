// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Config extends APIResource {
  /**
   * Get the current configuration of JrDevMCP (e.g., LLM endpoint, Gemini model).
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
   * Update the configuration of JrDevMCP (e.g., change LLM endpoint, Gemini model).
   *
   * @example
   * ```ts
   * const configuration = await client.config.update({
   *   llmEndpoint: 'http://localhost:11434',
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
   * Gemini Advanced model used for heavy tasks
   */
  geminiModel?: string;

  /**
   * Model name for the local LLM server
   */
  llmModel?: string;
}

export interface ConfigUpdateParams {
  /**
   * Endpoint for the local LLM server (Ollama or LM Studio)
   */
  llmEndpoint: string;

  /**
   * Gemini Advanced model used for heavy tasks
   */
  geminiModel?: string;

  /**
   * Model name for the local LLM server
   */
  llmModel?: string;
}

export declare namespace Config {
  export { type Configuration as Configuration, type ConfigUpdateParams as ConfigUpdateParams };
}
