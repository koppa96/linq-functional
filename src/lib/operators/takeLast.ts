import { Operator } from '../types'

/**
 * Creates an `Operator` that yields the last items of the source `Iterable`.
 * If there are not enough items in the source, all items are yielded.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param amount The amount of items to include
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
