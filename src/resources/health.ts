// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Check the health status of the JrDevMCP server, including binder statuses for
   * local and Gemini LLMs.
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

export interface HealthCheckResponse {
  /**
   * Status of the Gemini Advanced binder
   */
  geminiStatus?: 'healthy' | 'unavailable' | 'error' | null;

  /**
   * Status of the local LLM binder
   */
  localLlmStatus?: 'healthy' | 'unavailable' | 'error';

  status?: string;

  uptime?: number;
}

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
