import { query } from '../query'
import { from } from '../starters'
import { EqualityCheck, Finisher, defaultEqualityCheck } from '../types'
import { any } from './any'

/**
 * Creates a `Finisher` that checks if the source `Iterable` contains an item that is equal to the provided value.
 * @param item The item to search for
 * @param equalityCheck An optional function that can be used to define what makes two items equal.
 * Defaults to the === operator, so by default it checks for referential equality in case of objects and arrays
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   contains(3)
 * ) // true
 */
export function contains<T>(
  item: T,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    return query(
      from(source),
      any(sourceItem => equalityCheck(item, sourceItem))
    )
  }
}
