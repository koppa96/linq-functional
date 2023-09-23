import { Operator } from '../types'

/**
 * Applies the provided type guard function to filter and cast the items that satisfy it.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param typeGuard A function that determines the type of the item
 * @example
 * // Assuming that isNumber: (value: any) => value is number
 * const result = query(
 *   from(['apple', 1, 'banana', 2]),
 *   ofType(isNumber),
 *   toArray()
 * ) // [1, 2]
 */
export function ofType<T>(
  typeGuard: (item: unknown) => item is T
): Operator<unknown, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          if (typeGuard(element)) {
            yield element
          }
        }
      },
    }
  }
}
