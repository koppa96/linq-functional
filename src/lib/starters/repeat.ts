import { Starter } from '../types'

/**
 * Creates a `Starter` that generates the provided item multiple times.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
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
