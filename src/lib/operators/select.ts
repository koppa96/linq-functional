import { Operator } from '../types'

/**
 * Projects the elements of the source sequence using the provided function
 * @param selector A function that transforms an element to the desired shape
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John Test'
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane Test'
 *   },
 *   {
 *     id: 3,
 *     name: 'Janet Test'
 *   }
 * ]
 *
 * const names = query(
 *   from(people),
 *   select(person => person.name),
 *   toArray()
 * ) // ['John Test', 'Jane Test', 'Janet Test']
 */
export function select<T, R>(
  selector: (element: T, index: number) => R
): Operator<T, R> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          yield selector(element, i)
          i++
        }
      },
    }
  }
}
