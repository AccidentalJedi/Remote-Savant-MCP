// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';

const client = new RemoteSavantMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveTaskResult', async () => {
    const responsePromise = client.tasks.retrieveTaskResult('task_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('submitHeavyTask: only required params', async () => {
    const responsePromise = client.tasks.submitHeavyTask({
      description: 'Integrate with an external API for real-time data processing',
      geminiModel: 'gemini-advanced',
      language: 'JavaScript',
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
  test.skip('submitHeavyTask: required and optional params', async () => {
    const response = await client.tasks.submitHeavyTask({
      description: 'Integrate with an external API for real-time data processing',
      geminiModel: 'gemini-advanced',
      language: 'JavaScript',
      sessionId: 'session_123',
    });
  });
});
