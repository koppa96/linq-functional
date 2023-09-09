import { Operator } from '../types'

/**
 * Creates a new sequence from the source sequence with the provided elements inserted at the given index.
 * @param index The 0 based index to insert the elements to
 * @param elements The elements to insert at the desired position
 */
export function insert<T>(index: number, elements: Iterable<T>): Operator<T, T>
/**
 * Creates a new sequence from the source sequence with the provided elements inserted at the given index.
 * @param index The 0 based index to insert the elements to
 * @param elements The elements to insert at the desired position
 */
export function insert<T>(index: number, ...elements: T[]): Operator<T, T>
export function insert<T>(
  index: number,
  elements: Iterable<T>
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          if (i === index) {
            for (const insertedElement of elements) {
              yield insertedElement
            }
          }

          yield element
        }
      },
    }
  }
}
