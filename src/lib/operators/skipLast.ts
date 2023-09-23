import { Operator } from '../types'

/**
 * Omits the last elements of an `Iterable`.
 * @param amount The amount of elements to omit
 * @example
 * const result = query(
 *   from([1, 2, 3, 4]),
 *   skipLast(2),
 *   toArray()
 * ) // [1, 2]
 */
export function skipLast<T>(amount = 1): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const buffer: T[] = []
        for (const element of source) {
          buffer.push(element)
          if (buffer.length > amount) {
            // This is surely not undefined, as the buffer is not empty
            const elementToEmit = buffer.shift()!
            yield elementToEmit
          }
        }
      },
    }
  }
}
