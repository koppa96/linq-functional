import { Operator } from '../types'

/**
 * Creates an `Operator` that performs an operation like SQL's left join of database tables.
 * If the join condition does not evaluate true for an item of the source sequence,
 * the item will be emitted with a `null` joined to it.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other The `Iterable` that contains the items to join with the source sequence
 * @param on A function that receives a pair of items and decides whether to join them or not
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
        for (const item of source) {
          let matchFound = false
          for (const otherItem of other) {
            if (on(item, otherItem)) {
              matchFound = true
              yield [item, otherItem]
            }
          }

          if (!matchFound) {
            yield [item, null]
          }
        }
      },
    }
  }
}
