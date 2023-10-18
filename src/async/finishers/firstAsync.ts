import { AsyncFinisher } from '../types'
import { firstOrNullAsync } from './firstOrNullAsync'

export function firstAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, T> {
  return async function (source) {
    const result = await firstOrNullAsync(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching items.')
    }

    return result
  }
}
