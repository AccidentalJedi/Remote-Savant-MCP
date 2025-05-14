// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RemoteSavantMcp from 'remote-savant-mcp';

const client = new RemoteSavantMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource config', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveConfiguration', async () => {
    const responsePromise = client.config.retrieveConfiguration();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateConfiguration: only required params', async () => {
    const responsePromise = client.config.updateConfiguration({
      llmEndpoint: 'http://localhost:11434',
      maxIterationsDefault: 3,
      systemPrompt:
        "You are a Junior Developer AI assistant named 'JrDevMCP,' working as a Model Context Protocol (MCP) server compatible with VS Code and the Augment extension...",
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
  test.skip('updateConfiguration: required and optional params', async () => {
    const response = await client.config.updateConfiguration({
      llmEndpoint: 'http://localhost:11434',
      maxIterationsDefault: 3,
      systemPrompt:
        "You are a Junior Developer AI assistant named 'JrDevMCP,' working as a Model Context Protocol (MCP) server compatible with VS Code and the Augment extension...",
      geminiApiKey: 'your_gemini_api_key_here',
      geminiConnectionPoolSize: 5,
      geminiModel: 'gemini-advanced',
      geminiRetries: 3,
      geminiTimeout: 60,
      llmModel: 'llama3',
      localLlmConnectionPoolSize: 5,
      localLlmRetries: 3,
      localLlmTimeout: 30,
    });
  });
});
