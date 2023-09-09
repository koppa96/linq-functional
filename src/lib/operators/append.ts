import { Operator } from '../types'

/**
 * Creates a new `Iterable` that starts with the elements of the source
 * iterable, and ends with the elements passed as argument.
 * @param elements An iterable containing the elements to append
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   append([4, 5, 6]),
 *   toArray()
 * )
 * console.log(result) // Outputs [1, 2, 3, 4, 5, 6]
 */
export function append<T>(elements: Iterable<T>): Operator<T, T>

/**
 * Creates a new `Iterable` that starts with the elements of the source
 * iterable, and ends with the elements passed as argument.
 * @param elements The elements to append
 * @returns An operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   append(4, 5, 6),
 *   toArray()
 * )
 * console.log(result) // Outputs [1, 2, 3, 4, 5, 6]
 */
export function append<T>(...elements: T[]): Operator<T, T>

export function append<T>(elements: Iterable<T>): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          yield element
        }

        for (const element of elements) {
          yield element
        }
      },
    }
  }
}
