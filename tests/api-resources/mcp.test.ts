// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';

const client = new RemoteSavantMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcp', () => {
  // skipped: tests are disabled for the time being
  test.skip('process: only required params', async () => {
    const responsePromise = client.mcp.process({
      parameters: {
        language: 'Python',
        requirements: 'Write a function to calculate the factorial of a number',
      },
      tool: 'code_implementation',
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
  test.skip('process: required and optional params', async () => {
    const response = await client.mcp.process({
      parameters: {
        language: 'Python',
        requirements: 'Write a function to calculate the factorial of a number',
        complexity: 'medium',
      },
      tool: 'code_implementation',
      useGemini: false,
    });
  });
});
