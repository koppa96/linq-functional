import { Comparator, defaultComparator, Finisher } from '../types'
import { query } from '../query'
import { from } from '../starters/from'
import { select } from '../operators/select'
import { min } from './min'

/**
 * Creates a `Finisher` that returns the smallest value selected by the given selector.
 * @param selector A function that will be used to select the value for each item
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 selected values of items is the greater one.
 * @example
 * const people = [
 *   {
 *     name: "John Test",
 *     age: 25
 *   },
 *   {
 *     name: "Jane Test",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   maxOf(person => person.age)
 * )
 * console.log(result) // Outputs 25
 */
export function minOf<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, R | null> {
  return function (source) {
    return query(from(source), select(selector), min(comparator))
  }
}
