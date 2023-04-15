import { query } from '../query'
import { from } from '../starters/from'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'
import { select } from './select'
import { where } from './where'

export type Grouping<K, T> = Iterable<T> & { key: K }

export function groupBy<T, K>(
  keySelector: (item: T) => K,
  equalityCheck: EqualityCheck<K> = defaultEqualityCheck
): Operator<T, Grouping<K, T>> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const keys = query(
          from(source),
          select(keySelector),
          distinct(equalityCheck)
        )

        for (const key of keys) {
          yield {
            key,
            [Symbol.iterator]() {
              return query(
                from(source),
                where(element => equalityCheck(keySelector(element), key))
              )[Symbol.iterator]()
            },
          }
        }
      },
    }
  }
}
