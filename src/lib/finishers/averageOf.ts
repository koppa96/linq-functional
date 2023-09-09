import { Finisher } from '../types'

/**
 * Calculates the average of the values mapped from the source sequence by the given selector.
 * @param selector A function that maps an item to a number that will be used for calculating the average
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
 *   averageOf(person => person.age)
 * )
 * console.log(result) // Outputs 22.5
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
