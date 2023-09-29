import { Comparator, defaultComparator, Finisher } from '../types'

/**
 * Creates a `Finisher` that returns the item that has the greatest value selected by the given selector.
 * @param selector A function that will be used to select the value for each item to compare them by
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 selected values of items is the greater one.
 * @example
 * const people = [
 *   {
 *     name: 'John',
 *     age: 25
 *   },
 *   {
 *     name: 'Jane',
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   maxBy(person => person.age)
 * ) // { name: "John", age: 25 }
 */
export function maxBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null> {
  return function (source) {
    let max: T | null = null
    let maxValue: R | null = null

    for (const item of source) {
      const result = selector(item)
      if (maxValue === null || comparator(maxValue, result) < 0) {
        max = item
        maxValue = result
      }
    }

    return max
  }
}
