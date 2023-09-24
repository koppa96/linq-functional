import { Operator } from '../types'
import { isIterable } from '../utils/isIterable'

/**
 * Creates an `Operator` that yields the items from the source up to the specified index,
 * then yields the provided items, then yields the rest of the source.
 * Throws an error if the index is out of range.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param index The 0 based index to insert the items to
 * @param items The items to insert at the desired position
 * @example
 * const result = query(
 *   from([1, 2, 5]),
 *   insert(2, [3, 4]),
 *   toArray()
 * ) // [1, 2, 3, 4, 5]
 */
export function insert<T>(index: number, items: Iterable<T>): Operator<T, T>

/**
 * Creates an `Operator` that yields the items from the source up to the specified index,
 * then yields the provided items, then yields the rest of the source.
 * Throws an error if the index is out of range.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param index The 0 based index to insert the items to
 * @param item The item to insert at the desired position
 * @param rest The rest of the items to insert after the first one
 * @example
 * const result = query(
 *   from([1, 2, 5]),
 *   insert(2, 3, 4),
 *   toArray()
 * ) // [1, 2, 3, 4, 5]
 */
export function insert<T>(index: number, item: T, ...rest: T[]): Operator<T, T>

export function insert<T>(
  index: number,
  itemOrItems: T | Iterable<T>,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    if (index < 0) {
      throw new Error('Index out of range')
    }

    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const item of source) {
          if (i === index) {
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
          }

          yield item
          i++
        }

        if (i < index) {
          throw new Error('Index out of range')
        }
      },
    }
  }
}
