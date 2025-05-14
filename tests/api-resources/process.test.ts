// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';

const client = new RemoteSavantMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource process', () => {
  // skipped: tests are disabled for the time being
  test.skip('processTaskDirect: only required params', async () => {
    const responsePromise = client.process.processTaskDirect({
      parameters: { code: 'function factorial(n) { return n * factorial(n-1); }', language: 'JavaScript' },
      tool: 'code_debugging',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('processTaskDirect: required and optional params', async () => {
    const response = await client.process.processTaskDirect({
      parameters: {
        code: 'function factorial(n) { return n * factorial(n-1); }',
        language: 'JavaScript',
        complexity: 'high',
        error: 'RangeError: Maximum call stack size exceeded',
      },
      tool: 'code_debugging',
      useGemini: true,
    });
  });
});
