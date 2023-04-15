import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { skip } from './skip'
import { take } from './take'

export function slice<T>(startIndex: number, endIndex: number): Operator<T, T> {
  return function (source) {
    return query(from(source), skip(startIndex), take(endIndex - startIndex))
  }
}
