// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';

const client = new RemoteSavantMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource researchSessions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.researchSessions.create({
      description: 'Research and implement an optimized factorial function',
      name: 'Factorial Function Research',
      systemPrompt: 'You are a Junior Developer AI assistant focused on writing optimized code...',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.researchSessions.create({
      description: 'Research and implement an optimized factorial function',
      name: 'Factorial Function Research',
      systemPrompt: 'You are a Junior Developer AI assistant focused on writing optimized code...',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.researchSessions.retrieve('session_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.researchSessions.update('session_123', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addMemory: only required params', async () => {
    const responsePromise = client.researchSessions.addMemory('session_123', {
      content: 'Noticed that factorial function lacks input validation',
      body_sessionId: 'session_123',
      type: 'observation',
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
  test.skip('addMemory: required and optional params', async () => {
    const response = await client.researchSessions.addMemory('session_123', {
      content: 'Noticed that factorial function lacks input validation',
      body_sessionId: 'session_123',
      type: 'observation',
      metadata: { iteration: 'bar' },
      parentId: 'memory_456',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getMemoryThread: only required params', async () => {
    const responsePromise = client.researchSessions.getMemoryThread('memory_456', {
      sessionId: 'session_123',
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
  test.skip('getMemoryThread: required and optional params', async () => {
    const response = await client.researchSessions.getMemoryThread('memory_456', {
      sessionId: 'session_123',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listIterativeTasks', async () => {
    const responsePromise = client.researchSessions.listIterativeTasks('session_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listIterativeTasks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.researchSessions.listIterativeTasks(
        'session_123',
        { status: 'processing' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RemoteSavantMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('searchMemory: only required params', async () => {
    const responsePromise = client.researchSessions.searchMemory('session_123', { query: 'factorial' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('searchMemory: required and optional params', async () => {
    const response = await client.researchSessions.searchMemory('session_123', {
      query: 'factorial',
      limit: 10,
      page: 1,
      typeFilter: 'observation',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('submitIterativeTask: only required params', async () => {
    const responsePromise = client.researchSessions.submitIterativeTask('session_123', {
      body_sessionId: 'session_123',
      task: { language: 'bar', requirements: 'bar' },
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
  test.skip('submitIterativeTask: required and optional params', async () => {
    const response = await client.researchSessions.submitIterativeTask('session_123', {
      body_sessionId: 'session_123',
      task: { language: 'bar', requirements: 'bar' },
      maxIterations: 3,
    });
  });
});
