import { toArray } from '../finishers/toArray'
import { query } from '../query'
import { from } from '../starters/from'
import { Operator } from '../types'

export function reverse<T>(): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const result = query(from(source), toArray())
        for (let i = result.length - 1; i >= 0; i--) {
          yield result[i]
        }
      },
    }
  }
}
