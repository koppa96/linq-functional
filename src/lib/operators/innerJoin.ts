import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { crossJoin } from './crossJoin'
import { where } from './where'

/**
 * Creates an `Operator` that performs an operation like SQL's inner join of database tables.
 * Emits a pair of items if the join condition evaluates to true.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other The `Iterable` that contains the items to join with the source
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
 *   innerJoin(dogs, (person, dog) => person.id === dog.ownerId),
 *   toArray()
 * ) // [[{id: 1, name: 'John Test'}, {id: 1, name: 'Lola', ownerId: 1}], [{id: 2, name: 'Jane Test'}, {id: 2, name: 'Luna', ownerId: 2}]]
 */
export function innerJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O]> {
  return function (source) {
    return query(
      from(source),
      crossJoin(other),
      where(([left, right]) => on(left, right))
    )
  }
}
