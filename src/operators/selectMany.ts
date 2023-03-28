import { Operator } from '../types'

export function selectMany<T, R>(
  collectionSelector: (item: T) => Iterable<R>
): Operator<T, R>
export function selectMany<T, C, R>(
  collectionSelector: (item: T) => Iterable<C>,
  resultSelector: (sourceItem: T, collectionItem: C) => R
): Operator<T, R>
export function selectMany<T>(
  collectionSelector: (item: T) => Iterable<unknown>,
  resultSelector?: (sourceItem: unknown, collectionItem: unknown) => unknown
): Operator<T, unknown> {
  return function (source) {
    return function* () {
      for (const element of source()) {
        const collection = collectionSelector(element)
        for (const collectionElement of collection) {
          if (resultSelector) {
            yield resultSelector(element, collectionElement)
          } else {
            yield collectionElement
          }
        }
      }
    }
  }
}
