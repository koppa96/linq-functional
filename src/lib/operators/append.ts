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
 * @param element The elements to append
 * @param rest The rest of the elements to append
 * @returns An operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   append(4, 5, 6),
 *   toArray()
 * )
 * console.log(result) // Outputs [1, 2, 3, 4, 5, 6]
 */
export function append<T>(element: T, ...rest: T[]): Operator<T, T>

export function append<T>(
  elementOrElements: Iterable<T> | T,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          yield element
        }

        if (isIterable<T>(elementOrElements)) {
          for (const element of elementOrElements) {
            yield element
          }
        } else {
          yield elementOrElements
        }

        for (const element of rest) {
          yield element
        }
      },
    }
  }
}

function isIterable<T>(
  iterableOrElement: any
): iterableOrElement is Iterable<T> {
  return typeof iterableOrElement[Symbol.iterator] === 'function'
}
