import { query } from '../query'
import { from } from '../starters/from'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'
import { select } from './select'
import { where } from './where'

export type Grouping<K, T> = Iterable<T> & { key: K }

/**
 * Groups the elements of the source sequence by the values selected by the provided selector
 * @param keySelector A function that selects a group key for each element
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 * const people = [
 *   {
 *     name: "John Test",
 *     age: 25
 *   },
 *   {
 *     name: "Jane Test",
 *     age: 20
 *   },
 *   {
 *     name: "Janet Test",
 *     age: 25
 *   }
 * ]
 *
 * const result = query(
 *   from(people),
 *   groupBy(person => person.age),
 *   select(group => ({
 *     key: group.key,
 *     items: query(
 *       from(group),
 *       select(person => person.name)
 *       toArray(),
 *     )
 *   })),
 *   toArray()
 * ) // [{key: 25, items: ["John Test", "Janet Test"]}, {key: 20, items: ["Jane Test"]}]
 */
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
