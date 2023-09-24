import { Finisher } from '../types'

/**
 * Creates a `Finisher` that returns the item at the specified index of the source `Iterable`.
 * @param index The zero based index of the desired item
 * @example
 * const result = query(
 *   from(['apple', 'banana', 'lemon']),
 *   elementAt(2)
 * ) // 'lemon'
 */
export function elementAt<T>(index: number): Finisher<T, T> {
  return function (source) {
    if (index < 0) {
      throw new Error('Index out of range.')
    }

    let i = 0
    for (const item of source) {
      if (i === index) {
        return item
      }
      i++
    }

    throw new Error('Index out of range.')
  }
}
