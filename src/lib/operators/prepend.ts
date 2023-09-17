import { Operator } from '../types'
import { append } from './append'
import { isIterable } from '../utils/isIterable'

export function prepend<T>(elements: Iterable<T>): Operator<T, T>
export function prepend<T>(element: T, ...rest: T[]): Operator<T, T>
export function prepend<T>(
  elementOrElements: Iterable<T> | T,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    if (isIterable(elementOrElements)) {
      return append(source)(elementOrElements)
    }

    return append(source)([elementOrElements, ...rest])
  }
}
