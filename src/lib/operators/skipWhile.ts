import { Operator } from '../types'

/**
 * Omits the items of an `Iterable` while the provided function returns
 * true for each item. If the condition returns false for an item, that
 * item and the items after that will be included in the result.
 * @param predicate A function that decides if an item should be omitted
 * @example
 * const result = query(
 *   from([1, 2, 3, 2, 5, 1]),
 *   skipWhile(item => item < 3),
 *   toArray()
 * ) // [3, 2, 5, 1]
 */
export function skipWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let skip = true
        let i = 0
        for (const element of source) {
          skip = skip && predicate(element, i)
          i++

          if (skip) {
            continue
          }

          yield element
        }
      },
    }
  }
}
