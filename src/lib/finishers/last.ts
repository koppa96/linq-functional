import { Finisher } from '../types'
import { lastOrNull } from './lastOrNull'

/**
 * Creates a `Finisher` that returns the last item that matches the given predicate.
 * If no predicate is specified it simply returns the last item of the source `Iterable`.
 * Throws an error if the source is empty or no items match the predicate.
 * @param predicate A function that will test an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   last(value => value < 3)
 * ) // 2
 */
export function last<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = lastOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching item.')
    }

    return result
  }
}
