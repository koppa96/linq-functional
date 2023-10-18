import { AsyncFinisher } from '../types'
import { lastOrNullAsync } from './lastOrNullAsync'

export function lastAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, T> {
  return async function (source) {
    const result = await lastOrNullAsync(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching item.')
    }

    return result
  }
}
