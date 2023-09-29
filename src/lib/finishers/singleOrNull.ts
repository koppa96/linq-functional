import { Finisher } from '../types'

/**
 * Creates a `Finisher` that returns the only item that matches the given predicate.
 * If no predicate is specified it simply returns the only item of the source `Iterable`.
 * If there are multiple items in the source and no predicate is given, or there
 * are multiple items that match the predicate, an error is thrown. If the source
 * is empty or has no matching items to the predicate, it returns `null`.
 * @param predicate A function that will test an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   singleOrNull(value => value > 2)
 * ) // 3
 */
export function singleOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let result: T | null = null
    for (const item of source) {
      if (!predicate || predicate(item)) {
        if (result === null) {
          result = item
        } else {
          throw new Error('The sequence contains more than one matching item.')
        }
      }
    }

    return result
  }
}
