import { Operator } from '../types'

/**
 * Transforms the source iterable to a new one that has the elements of the
 * original iterable in evenly sized batches. The last chunk may have fewer
 * elements, if the total length of the source is not divisible by the chunk size.
 * @param size The size of the chunks
 * @return An operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   chunk(2),
 *   toArray()
 * )
 * console.log(result) // Outputs [[1, 2], [3, 4], [5]]
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
