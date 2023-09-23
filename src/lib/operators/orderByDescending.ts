import { Comparator, Operator, defaultComparator } from '../types'
import { orderBy } from './orderBy'

/**
 * Performs a descending ordering by the selected values and the comparator function.
 * The sorting algorithm is stable, so performing subsequent orderings will
 * keep the order of the items within equality groups
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param selector A function that selects a value for each item
 * @param comparator An optional function to define how to compare items
 * @example
 * const people = [
 *   {
 *     name: 'John Test',
 *     age: 39
 *   },
 *   {
 *     name: 'Jane Test',
 *     age: 32
 *   },
 *   {
 *     name: 'Janet Test',
 *     age: 39
 *   }
 * ]
 *
 * const result = query(
 *   from(people),
 *   orderByDescending(person => person.age),
 *   toArray()
 * ) // [{name: 'John Test', age: 39}, {name: 'Janet Test', age: 39}, {name: 'Jane Test', age: 32}]
 */
export function orderByDescending<T, P>(
  selector: (item: T) => P,
  comparator: Comparator<P> = defaultComparator
): Operator<T, T> {
  return orderBy(selector, (left, right) => comparator(right, left))
}
