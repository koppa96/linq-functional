import { Starter } from '../types'

export function empty<T>(): Starter<T> {
  return function () {
    return {
      *[Symbol.iterator]() {},
    }
  }
}
