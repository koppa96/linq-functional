import { Starter } from '../types'

/**
 * Creates an `Iterable` that contains the provided item multiple times.
 * @param element The item to repeat
 * @param times The amount of times to repeat the item
 * @example
 * const result = query(
 *   repeat('hello', 3),
 *   toArray()
 * ) // ['hello', 'hello', 'hello']
 */
export function repeat<T>(element: T, times: number): Starter<T> {
  return function () {
    return {
      *[Symbol.iterator]() {
        for (let i = 0; i < times; i++) {
          yield element
        }
      },
    }
  }
}
