import { Finisher } from '../types'
import { toArray } from './toArray'

/**
 * Creates a `Finisher` that joins the items of the source `Iterable<string>` into a single string,
 * where the items are separated by the given separator.
 * @param separator A string that will be used to separate the items of the source.
 * If omitted, a comma will be used.
 * @example
 * const result = query(
 *   from(['apple', 'banana', 'lemon']),
 *   join(', ')
 * ) // 'apple, banana, lemon'
 */
export function join(separator?: string): Finisher<string, string> {
  return function (source) {
    return toArray<string>()(source).join(separator)
  }
}
