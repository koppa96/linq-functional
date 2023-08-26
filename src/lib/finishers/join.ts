import { Finisher } from '../types'
import { toArray } from './toArray'

/**
 * Joins the elements of the string sequence into a single string,
 * where the elements are separated by the given separator.
 * @param separator A string that will be used to separate the elements of the source sequence.
 * If omitted, a comma will be used.
 * @example
 * const result = query(
 *   from(['apple', 'banana', 'lemon']),
 *   join(', ')
 * )
 * console.log(result) // Outputs apple, banana, lemon
 */
export function join(separator?: string): Finisher<string, string> {
  return function (source) {
    return toArray<string>()(source).join(separator)
  }
}
