import { Operator } from '../types'
import { append } from './append'
import { isIterable } from '../utils/isIterable'

/**
 * Creates a new `Iterable` that starts with the elements passed as argument,
 * and ends with the elements of the source iterable.
 * @param elements An iterable containing the elements to prepend
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   prepend([4, 5, 6]),
 *   toArray()
 * )
 * console.log(result) // Outputs [4, 5, 6, 1, 2, 3]
 */
export function prepend<T>(elements: Iterable<T>): Operator<T, T>

/**
 * Creates a new `Iterable` that starts with the elements passed as argument,
 * and ends with the elements of the source iterable.
 * @param element The elements to prepend
 * @param rest The rest of the elements to prepend
 * @returns An operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   prepend(4, 5, 6),
 *   toArray()
 * )
 * console.log(result) // Outputs [4, 5, 6, 1, 2, 3]
 */
export function prepend<T>(element: T, ...rest: T[]): Operator<T, T>

export function prepend<T>(
  elementOrElements: Iterable<T> | T,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    if (isIterable(elementOrElements)) {
      return append(source)(elementOrElements)
    }

    return append(source)([elementOrElements, ...rest])
  }
}
