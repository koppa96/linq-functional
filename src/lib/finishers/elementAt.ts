import { Finisher } from '../types'

/**
 * Returns the element at the specified index of the source sequence.
 * @param index The zero based index of the desired element
 * @example
 * const result = query(
 *   from(["apple", "banana", "lemon"]),
 *   elementAt(2)
 * )
 * console.log(result) // Outputs lemon
 */
export function elementAt<T>(index: number): Finisher<T, T> {
  return function (source) {
    if (index < 0) {
      throw new Error('Index out of range.')
    }

    let i = 0
    for (const element of source) {
      if (i === index) {
        return element
      }
      i++
    }

    throw new Error('Index out of range.')
  }
}
