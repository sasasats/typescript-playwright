import type { APIRequestContext, APIResponse } from '@playwright/test';

export class HttpClient {
  constructor(private readonly request: APIRequestContext) {}

  private async assertOk(res: APIResponse): Promise<void> {
    if (res.ok()) return;
    const body = await res.text();
    throw new Error(`HTTP ${res.status()} ${res.statusText()}: ${body || '(empty body)'}`);
  }

  async postForm<T>(url: string, form: Record<string, string | number | boolean>): Promise<T> {
    const response = await this.request.post(url, {
      form,
    });

    const body = await response.text();
    return JSON.parse(body) as T;
  }

  async postJson<T>(path: string, options?: { data?: unknown; headers?: Record<string, string> }): Promise<T> {
    const res = await this.request.post(path, {
      data: options?.data,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    await this.assertOk(res);
    const text = await res.text();
    return text ? (JSON.parse(text) as T) : (undefined as T);
  }

  async getJson<T>(path: string, options?: { headers?: Record<string, string> }): Promise<T> {
    const res = await this.request.get(path, { headers: options?.headers });
    await this.assertOk(res);
    return res.json() as Promise<T>;
  }
}
