import { Operator } from '../types'

export function insert<T>(index: number, elements: Iterable<T>): Operator<T, T>
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
