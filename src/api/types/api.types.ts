export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface RequestConfig extends Omit<RequestInit, 'body'> {
  method?: HTTPMethod
  headers?: Record<string, string>
  signal?: AbortSignal
  body?: unknown
}

/** Basic fetch options */
export type FetchOptions = Omit<RequestConfig, 'method'>

/** API response wrapper */
export interface APIResponse<T = unknown> {
  data: T
  ok: boolean
  status: number
}

/** API error structure */
export interface APIError extends Error {
  status: number
  data: unknown
}
