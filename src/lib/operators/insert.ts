import { Operator } from '../types'
import { isIterable } from '../utils/isIterable'

/**
 * Creates a new sequence from the source sequence with the provided elements inserted at the given index.
 * @param index The 0 based index to insert the elements to
 * @param elements The elements to insert at the desired position
 */
export function insert<T>(index: number, elements: Iterable<T>): Operator<T, T>
/**
 * Creates a new sequence from the source sequence with the provided elements inserted at the given index.
 * @param index The 0 based index to insert the elements to
 * @param element The element to insert at the desired position
 * @param rest The rest of the elements to insert after the first one
 */
export function insert<T>(
  index: number,
  element: T,
  ...rest: T[]
): Operator<T, T>
export function insert<T>(
  index: number,
  elementOrElements: T | Iterable<T>,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    if (index < 0) {
      throw new Error('Index out of range')
    }

    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          if (i === index) {
            if (isIterable<T>(elementOrElements)) {
              for (const element of elementOrElements) {
                yield element
              }
            } else {
              yield elementOrElements
            }

            for (const element of rest) {
              yield element
            }
          }

          yield element
          i++
        }

        if (i < index) {
          throw new Error('Index out of range')
        }
      },
    }
  }
}
