import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { from } from '../starters'
import { any } from '../finishers'
import { query } from '../query'

/**
 * Creates an `Operator` that filters out the items from the source sequence which are considered duplicate by the provided selector's value.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param selector A function that will be used to select the value for each item to compare them by
 * @param equalityCheck An optional function to check if 2 items are considered equal
 * @example
 * const source = [
 *   {id: 1, name: 'John'},
 *   {id: 2, name: 'Jane'},
 *   {id: 1, name: 'John'}
 * ]
 *
 * const result = query(
 *   from(source),
 *   distinctBy(item => item.id),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function distinctBy<T, R>(
  selector: (item: T) => R,
  equalityCheck: EqualityCheck<R> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const visitedItems: R[] = []
        for (const element of source) {
          const value = selector(element)
          const currentItemVisited = query(
            from(visitedItems),
            any(item => equalityCheck(value, item))
          )
          if (currentItemVisited) {
            continue
          }

          yield element
          visitedItems.push(value)
        }
      },
    }
  }
}
