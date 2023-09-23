import { Starter } from '../types'

/**
 * Creates a function that returns the source `Iterable`.
 * @param source Contains the items to return
 * @example
 * const source = new Set<number>()
 * source.add(1)
 * source.add(2)
 *
 * const result = query(from(source), toArray()) // [1, 2]
 */
export function from<T>(source: Iterable<T>): Starter<T> {
  return function () {
    return source
  }
}
