import { Operator } from '../types'
import { append } from './append'

export function prepend<T>(elements: Iterable<T>): Operator<T, T>
export function prepend<T>(...elements: T[]): Operator<T, T>
export function prepend<T>(elements: Iterable<T>): Operator<T, T> {
  return function (source) {
    return append(source)(elements)
  }
}
