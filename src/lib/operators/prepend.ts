import { Operator } from '../types'
import { append } from './append'
import { isIterable } from '../utils/isIterable'

/**
 * Creates an `Operator` that yields all items passed as argument,
 * then yields the items from the source sequence.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param items An `Iterable` containing the items to prepend
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   prepend([4, 5, 6]),
 *   toArray()
 * )
 * console.log(result) // Outputs [4, 5, 6, 1, 2, 3]
 */
export function prepend<T>(items: Iterable<T>): Operator<T, T>

/**
 * Creates an `Operator` that yields all items passed as argument,
 * then yields the items from the source sequence.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param item The items to prepend
 * @param rest The rest of the items to prepend
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   prepend(4, 5, 6),
 *   toArray()
 * )
 * console.log(result) // Outputs [4, 5, 6, 1, 2, 3]
 */
export function prepend<T>(item: T, ...rest: T[]): Operator<T, T>

export function prepend<T>(
  itemOrItems: Iterable<T> | T,
  ...rest: T[]
): Operator<T, T> {
  return function (source) {
    if (isIterable(itemOrItems)) {
      return append(source)(itemOrItems)
    }

    return append(source)([itemOrItems, ...rest])
  }
}
