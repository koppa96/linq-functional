import { Operator } from '../types'

/**
 * Creates an `Operator` that projects the items of the source sequence using the provided function.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param selector A function that transforms an item to the desired shape
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John'
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane'
 *   },
 *   {
 *     id: 3,
 *     name: 'Janet'
 *   }
 * ]
 *
 * const names = query(
 *   from(people),
 *   select(person => person.name),
 *   toArray()
 * ) // ['John', 'Jane', 'Janet']
 */
export function select<T, R>(
  selector: (item: T, index: number) => R
): Operator<T, R> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const item of source) {
          yield selector(item, i)
          i++
        }
      },
    }
  }
}
