import { toArray } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { Comparator, Operator, defaultComparator } from '../types'

/**
 * Performs an ascending ordering by the selected values and the comparator function.
 * The sorting algorithm is stable, so performing subsequent orderings will
 * keep the order of the items within equality groups
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
 *   orderBy(person => person.age),
 *   toArray()
 * ) // [{name: 'Jane Test', age: 32}, {name: 'John Test', age: 39}, {name: 'Janet Test', age: 39}]
 */
export function orderBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Operator<T, T> {
  return function (source) {
    return {
      [Symbol.iterator]() {
        const sourceArray = query(from(source), toArray())
        sourceArray.sort((left, right) => {
          return comparator(selector(left), selector(right))
        })
        return sourceArray[Symbol.iterator]()
      },
    }
  }
}
