import { Finisher } from '../types'
import { singleOrNull } from './singleOrNull'

export function single<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = singleOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching element.')
    }

    return result
  }
}
