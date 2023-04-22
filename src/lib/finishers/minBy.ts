import { Comparator, defaultComparator, Finisher } from '../types'

/**
 * Returns the element that has the smallest value selected by the given selector.
 * @param selector A function that will be used to select the value for each item to compare them by
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 selected values of elements is the greater one.
 * @returns A finisher operator configured by the given parameters
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
 *   minBy(person => person.age)
 * )
 * console.log(result) // Outputs {name: "Jane Test", age: 20}
 */
export function minBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null> {
  return function (source) {
    let min: T | null = null
    let minValue: R | null = null

    for (const element of source) {
      const result = selector(element)
      if (minValue === null || comparator(minValue, result) > 0) {
        min = element
        minValue = result
      }
    }

    return min
  }
}
