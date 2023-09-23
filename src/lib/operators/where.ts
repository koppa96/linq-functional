import { Operator } from '../types'

/**
 * Filters the items that satisfy the provided condition.
 * @param predicate A function that checks if an item should be included in the result
 * @example
 * const result = query(
 *   from([1, 2, 3, 4]),
 *   where(item => item % 2 === 0),
 *   toArray()
 * ) // [2, 4]
 */
export function where<T>(
  predicate: (element: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          if (predicate(element, i)) {
            yield element
          }
          i++
        }
      },
    }
  }
}
