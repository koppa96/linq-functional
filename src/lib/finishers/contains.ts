import { query } from '../query'
import { from } from '../starters'
import { EqualityCheck, Finisher, defaultEqualityCheck } from '../types'
import { any } from './any'

/**
 * Checks if the source sequence contains an element that is equal to the provided value.
 * @param element The element to search for
 * @param equalityCheck An optional function that can be used to define what makes two elements equal.
 * Defaults to the === operator, so by default it checks for referential equality in case of objects and arrays
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   contains(3)
 * )
 * console.log(result) // Outputs true
 */
export function contains<T>(
  element: T,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    return query(
      from(source),
      any(item => equalityCheck(item, element))
    )
  }
}
