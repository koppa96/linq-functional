import { Operator } from '../types'
import { isIterable } from '../utils/isIterable'

/**
 * Creates an `Operator` that yields all the items from the source sequence,
 * then yields the items passed as argument.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param items An iterable containing the items to append
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   append([4, 5, 6]),
 *   toArray()
 * ) // [1, 2, 3, 4, 5, 6]
 */
export function append<T>(items: Iterable<T>): Operator<T, T>

/**
 * Creates an `Operator` that yields all the items from the source sequence,
 * then yields the items passed as argument.
 * @param item First item to append
 * @param rest The rest of the items to append
 * @returns An operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   append(4, 5, 6),
 *   toArray()
 * ) // [1, 2, 3, 4, 5, 6]
 */
export function append<T>(item: T, ...rest: T[]): Operator<T, T>

export function append<T>(
  itemOrItems: Iterable<T> | T,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const item of source) {
          yield item
        }

        if (isIterable<T>(itemOrItems)) {
          for (const item of itemOrItems) {
            yield item
          }
        } else {
          yield itemOrItems
        }

        for (const item of rest) {
          yield item
        }
      },
    }
  }
}
