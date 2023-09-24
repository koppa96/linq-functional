import { toArray } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { Comparator, Operator, defaultComparator } from '../types'

/**
 * Creates an `Operator` that performs an ascending ordering by the selected values and the comparator function.
 * The sorting algorithm is stable, so performing subsequent orderings will
 * keep the order of the items within equality groups.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param selector A function that selects a value for each item
 * @param comparator An optional function that compares the selected values
 * @example
 * const people = [
 *   {
 *     name: 'John',
 *     age: 39
 *   },
 *   {
 *     name: 'Jane',
 *     age: 32
 *   },
 *   {
 *     name: 'Janet',
 *     age: 39
 *   }
 * ]
 *
 * const result = query(
 *   from(people),
 *   orderBy(person => person.age),
 *   toArray()
 * ) // [{name: 'Jane', age: 32}, {name: 'John', age: 39}, {name: 'Janet', age: 39}]
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
