import { Finisher } from '../types'
import { firstOrNull } from './firstOrNull'

export function first<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = firstOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching elements.')
    }

    return result
  }
}
