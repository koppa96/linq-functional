import { Operator } from '../types'

/**
 * Executes the provided function for each item of the source `Iterable`.
 * Great for debugging intermediate results of complex queries.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param action The function to execute for each item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   tap((item, index) => console.log({item, index})),
 *   toArray()
 * )
 * // Produces the following console output
 * // {item: 1, index: 0}
 * // {item: 2, index: 1}
 * // {item: 3, index: 2}
 */
export function tap<T>(
  action: (element: T, index: number) => void
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          action(element, i)
          yield element
          i++
        }
      },
    }
  }
}
