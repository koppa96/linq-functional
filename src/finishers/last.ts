import { Finisher } from '../types'
import { lastOrNull } from './lastOrNull'

export function last<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = lastOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching element.')
    }

    return result
  }
}
