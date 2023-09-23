import { Operator } from '../types'

/**
 * Merges the source and the provided `Iterable` into a single `Iterable`. If
 * the source and the provided `Iterable` have different length, the result
 * will have the length of the shorter one.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other Contains the items to merge with the source.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   zip(['one', 'two']),
 *   toArray()
 * ) // [[1, 'one'], [2, 'two']]
 */
export function zip<T, O>(other: Iterable<O>): Operator<T, [T, O]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const iterator1 = source[Symbol.iterator]()
        const iterator2 = other[Symbol.iterator]()

        while (true) {
          const result1 = iterator1.next()
          const result2 = iterator2.next()

          if (result1.done) {
            return
          }

          if (result2.done) {
            return
          }

          yield [result1.value, result2.value]
        }
      },
    }
  }
}
