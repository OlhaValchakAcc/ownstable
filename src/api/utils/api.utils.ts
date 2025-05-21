import { APIError } from '../types/api.types'

/** Creates a standardized API error from a Response object */
export const createAPIError = async (response: Response): Promise<APIError> => {
  const error = new Error() as APIError
  error.status = response.status
  try {
    error.data = await response.json()
  } catch {
    error.data = await response.text()
  }
  error.name = 'APIError'
  error.message = `API Error: ${response.status} ${response.statusText}`
  return error
}