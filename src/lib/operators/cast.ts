import { Operator } from '../types'

/**
 * Simply casts the source iterable to the desired type.
 * Does no type checking. This operator is only supposed to be used if
 * you know that the contents of the source sequence will only contain a
 * specific type of items. For other scenarios `ofType` is recommended.
 * @example
 * const numbers: unknown[] = [1, 2, 3]
 * const result = query(
 *   from(numbers),
 *   cast<number>()
 * ) // Has type Iterable<number>
 */
export function cast<T>(): Operator<unknown, T> {
  return function (source) {
    return source as Iterable<T>
  }
}
