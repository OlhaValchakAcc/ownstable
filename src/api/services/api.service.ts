import { APIResponse, FetchOptions, RequestConfig } from '../types/api.types'
import { createAPIError } from '../utils/api.utils'

/** Core fetch function with error handling */
const fetchApi = async <T = unknown>(
  url: string,
  options: RequestConfig = {},
): Promise<APIResponse<T>> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  if (!response.ok) {
    throw await createAPIError(response)
  }

  const data = await response.json()
  return {
    data,
    ok: response.ok,
    status: response.status,
  }
}

/** API client with basic CRUD operations */
export const api = {
  get: <T>(path: string, options?: FetchOptions) =>
    fetchApi<T>(path, { method: 'GET', ...options }),

  post: <T, D>(path: string, data: D, options?: FetchOptions) =>
    fetchApi<T>(path, { method: 'POST', body: data, ...options }),
}


