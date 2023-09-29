import { Finisher } from '../types'
import { singleOrNull } from './singleOrNull'

/**
 * Creates a `Finisher` that returns the only item that matches the given predicate.
 * If no predicate is specified it simply returns the only item of the source `Iterable`.
 * If there are multiple items in the source and no predicate is given, or there
 * are multiple items that match the predicate, an error is thrown. The function also
 * throws an error if the source is empty or has no matching item.
 * @param predicate A function that will test an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   single(value => value > 2)
 * ) // 3
 */
export function single<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = singleOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching item.')
    }

    return result
  }
}
