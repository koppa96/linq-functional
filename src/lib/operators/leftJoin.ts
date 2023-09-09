import { Operator } from '../types'

/**
 * Performs an operation like SQL's left join of database tables.
 * If the join condition does not evaluate true for an element of the source sequence,
 * The element will be emitted with a `null` joined to it.
 * @param other The sequence to join with the source sequence
 * @param on A function that receives a pair of elements and decides whether to join them or not.
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
 * const dogs = [
 *   {
 *     id: 1,
 *     name: 'Lola',
 *     ownerId: 1
 *   },
 *   {
 *     id: 2,
 *     name: 'Luna',
 *     ownerId: 2
 *   },
 *   {
 *     id: 3,
 *     name: 'Max',
 *     ownerId: 4
 *   }
 * ]
 *
 * const result = query(
 *   from(people),
 *   leftJoin(dogs, (person, dog) => person.id === dog.ownerId),
 *   toArray()
 * ) // [[{id: 1, name: 'John Test'}, {id: 1, name: 'Lola', ownerId: 1}], [{id: 2, name: 'Jane Test'}, {id: 2, name: 'Luna', ownerId: 2}], [{id: 3, name: 'Janet Test'}, null]]
 */
export function leftJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O | null]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          let matchFound = false
          for (const otherElement of other) {
            if (on(element, otherElement)) {
              matchFound = true
              yield [element, otherElement]
            }
          }

          if (!matchFound) {
            yield [element, null]
          }
        }
      },
    }
  }
}
