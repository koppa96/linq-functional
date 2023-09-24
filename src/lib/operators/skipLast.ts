import { Operator } from '../types'

/**
 * Creates an `Operator` that omits the last items of the source `Iterable`.
 * If there are not enough items in the source, all items are omitted.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param amount The amount of items to omit
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
