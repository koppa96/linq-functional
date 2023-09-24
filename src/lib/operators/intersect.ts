import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'

/**
 * Creates an `Operator` that calculates the set intersection of the source sequence and the target sequence.
 * If an item is present in both of the sequences it will be included in the result. Duplicated items will only
 * be included once.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param items The items to intersect the source sequence with
 * @param equalityCheck An optional function to check if 2 items are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   intersect([2, 4, 6, 8]),
 *   toArray()
 * ) // [2, 4]
 */
export function intersect<T>(
  items: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return distinct(equalityCheck)({
      *[Symbol.iterator]() {
        for (const sourceItem of source) {
          for (const item of items) {
            if (equalityCheck(sourceItem, item)) {
              yield item
            }
          }
        }
      },
    })
  }
}
