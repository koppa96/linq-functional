import { any } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'

/**
 * Removes the elements from the source sequence which are present in the given list of elements.
 * @param elements The elements to remove from the source sequence
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 */
export function minus<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        return distinct(equalityCheck)({
          *[Symbol.iterator]() {
            for (const element of source) {
              if (
                !query(
                  from(elements),
                  any(otherElement => equalityCheck(element, otherElement))
                )
              ) {
                yield element
              }
            }
          },
        })
      },
    }
  }
}
