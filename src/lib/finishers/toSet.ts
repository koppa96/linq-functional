import { Finisher } from '../types'

/**
 * Creates a `Finisher` that collects the items of the source `Iterable` and returns it as a `Set`.
 * @example
 * const result = query(
 *   from([1, 2, 6, 1, 4, 4]),
 *   toSet()
 * ) // A set with values 1, 2, 6, 4
 */
export function toSet<T>(): Finisher<T, Set<T>> {
  return function (source) {
    const set = new Set<T>()
    for (const item of source) {
      set.add(item)
    }
    return set
  }
}
