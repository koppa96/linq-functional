import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { from } from '../starters'
import { any } from '../finishers'
import { query } from '../query'

/**
 * Filters the elements from the source sequence which are considered duplicate by the provided selector's value.
 * @param selector A function that will be used to select the value for each item to compare them by
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 1, 3, 3, 5, 2]),
 *   distinct(),
 *   toArray()
 * )
 * console.log(result) // Outputs [1, 2, 3, 5]
 */
export function distinctBy<T, R>(
  selector: (item: T) => R,
  equalityCheck: EqualityCheck<R> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const visitedElements: R[] = []
        for (const element of source) {
          const value = selector(element)
          const currentElementVisited = query(
            from(visitedElements),
            any(item => equalityCheck(value, item))
          )
          if (currentElementVisited) {
            continue
          }

          yield element
          visitedElements.push(value)
        }
      },
    }
  }
}
