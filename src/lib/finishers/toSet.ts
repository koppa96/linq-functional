import { Finisher } from '../types'

/**
 * Iterates the source sequence and returns it as a set.
 * @returns A finisher operator
 * @example
 * const result = query(
 *   from([1, 2, 6, 1, 4, 4]),
 *   toSet()
 * )
 * console.log(result) // Outputs a set with values 1, 2, 6, 4
 */
export function toSet<T>(): Finisher<T, Set<T>> {
  return function (source) {
    const set = new Set<T>()
    for (const element of source) {
      set.add(element)
    }
    return set
  }
}
