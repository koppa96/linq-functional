import { Operator } from '../types'

export interface InnerJoin<T, O, R> {
  other: Iterable<O>
  on: (left: T, right: O) => boolean
  into?: (left: T, right: O) => R
}

export function innerJoin<T, O, R = [T, O]>({
  other,
  on,
  into,
}: InnerJoin<T, O, R>): Operator<T, R> {
  return function (source) {
    return {
      *[Symbol.iterator](): Iterator<any> {
        for (const element of source) {
          for (const otherElement of other) {
            if (on(element, otherElement)) {
              if (into) {
                yield into(element, otherElement)
              } else {
                yield [element, otherElement]
              }
            }
          }
        }
      },
    }
  }
}
