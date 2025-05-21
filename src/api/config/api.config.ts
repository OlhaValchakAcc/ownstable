/** API configuration constants */
export const API_CONFIG = {
  // Base URL for API requests, fallback to localhost if not specified
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
  // Request timeout in milliseconds
  TIMEOUT: 30000,
  // Number of retry attempts for failed requests
  RETRY_ATTEMPTS: 3,
  // Delay between retry attempts in milliseconds
  RETRY_DELAY: 1000,
  // Default headers for all requests
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
} as const
