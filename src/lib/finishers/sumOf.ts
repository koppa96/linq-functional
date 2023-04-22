import { Finisher } from '../types'
import { aggregate } from './aggregate'

/**
 * Calculates the sum of the values mapped from the source sequence by the given selector.
 * @param selector A function that maps an item to a number that will be used for calculating the sum
 * @returns A finisher operator configured by the given parameters
 * @example
 * const people = [
 *   {
 *     name: "John Test",
 *     dogs: 2
 *   },
 *   {
 *     name: "Jane Test",
 *     dogs: 1
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   sumOf(person => person.dogs)
 * )
 * console.log(result) // Outputs 3
 */
export function sumOf<T>(selector: (item: T) => number): Finisher<T, number> {
  return aggregate(0, (result, item) => result + selector(item))
}
