import { Finisher } from '../types'
import { aggregate } from './aggregate'

/**
 * Creates a `Finisher` that calculates the sum of the values mapped from the source sequence by the given selector.
 * @param selector A function that maps an item to a number that will be used for calculating the sum
 * @example
 * const people = [
 *   {
 *     name: "John",
 *     dogs: 2
 *   },
 *   {
 *     name: "Jane",
 *     dogs: 1
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   sumOf(person => person.dogs)
 * ) // 3
 */
export function sumOf<T>(selector: (item: T) => number): Finisher<T, number> {
  return aggregate(0, (result, item) => result + selector(item))
}
