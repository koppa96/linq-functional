import { Operator } from '../types'

/**
 * Creates an `Operator` that transforms the source `Iterable` to a new one that has the items of the
 * original, in evenly sized batches. The last chunk may have fewer items, if the total length of the
 * source is not divisible by the chunk size.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param size The size of the chunks
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   chunk(2),
 *   toArray()
 * ) // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(size: number): Operator<T, T[]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let chunk: T[] = []
        for (const element of source) {
          chunk.push(element)
          if (chunk.length === size) {
            yield chunk
            chunk = []
          }
        }

        if (chunk.length > 0) {
          yield chunk
        }
      },
    }
  }
}
