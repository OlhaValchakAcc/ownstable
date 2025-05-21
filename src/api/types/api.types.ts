/** HTTP methods we support */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

/** Basic request configuration */
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

/** Configuration for API requests */
export interface APIRequestConfig<T = unknown> {
  method: HTTPMethod
  url: string
  data?: T
  headers?: Record<string, string>
  timeout?: number
  retryAttempts?: number
  retryDelay?: number
  signal?: AbortSignal
}

/** Configuration for retry mechanism */
export interface RetryConfig {
  attempts: number
  delay: number
}

/** State for API hooks */
export interface APIState<T> {
  data: T | null
  loading: boolean
  error: APIError | null
}

/** Actions available in API hooks */
export interface APIActions<T, P = unknown> {
  execute: (params?: P) => Promise<void>
  reset: () => void
} 