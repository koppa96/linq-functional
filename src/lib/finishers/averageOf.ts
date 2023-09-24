import { Finisher } from '../types'

/**
 * Creates a `Finisher` that calculates the average of the values mapped from the source `Iterable` by the given selector.
 * @param selector A function that transforms an item to a number that will be used for calculating the average
 * @example
 * const people = [
 *   {
 *     name: "John",
 *     age: 25
 *   },
 *   {
 *     name: "Jane",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   averageOf(person => person.age)
 * ) // 22.5
 */
export function averageOf<T>(
  selector: (item: T) => number
): Finisher<T, number> {
  return function (source) {
    let sum = 0
    let count = 0

    for (const element of source) {
      sum += selector(element)
      count++
    }

    return sum / count
  }
}
