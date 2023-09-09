import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'

/**
 * Calculates the intersection of the source sequence and the target sequence. If
 * an element is present in both of the sequences it will be included in the result.
 * @param elements The elements to compare the source sequence to
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   intersect([2, 4, 6, 8]),
 *   toArray()
 * ) // [2, 4]
 */
export function intersect<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return distinct(equalityCheck)({
      *[Symbol.iterator]() {
        for (const sourceElement of source) {
          for (const element of elements) {
            if (equalityCheck(sourceElement, element)) {
              yield element
            }
          }
        }
      },
    })
  }
}
