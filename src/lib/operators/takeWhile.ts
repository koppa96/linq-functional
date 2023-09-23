import { Operator } from '../types'

/**
 * Includes the items of an `Iterable` while the provided function returns
 * true for each item. If the condition returns false for an item, that
 * item and the items after that will be excluded from the result.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param predicate A function that decides if an item should be included
 * @example
 * const result = query(
 *   from([1, 2, 3, 2, 5, 1]),
 *   takeWhile(item => item < 3),
 *   toArray()
 * ) // [1, 2]
 */
export function takeWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          if (!predicate(element, i)) {
            return
          }

          yield element
          i++
        }
      },
    }
  }
}
