import { Operator } from '../types'

/**
 * Includes the last elements of an `Iterable`.
 * @param amount The amount of elements to include
 * @example
 * const result = query(
 *   from([1, 2, 3, 4]),
 *   takeLast(2),
 *   toArray()
 * ) // [3, 4]
 */
export function takeLast<T>(amount = 1): Operator<T, T> {
  return function (source) {
    const buffer: T[] = []
    for (const element of source) {
      buffer.push(element)
      if (buffer.length > amount) {
        buffer.shift()
      }
    }

    return buffer
  }
}
