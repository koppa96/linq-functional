import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { leftJoin } from './leftJoin'
import { select } from './select'

/**
 * Creates an `Operator` that performs an operation like SQL's right join of database tables.
 * If the join condition does not evaluate true for an item of the target `Iterable`,
 * the item will be emitted with a `null` joined to it.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other The sequence to join with the source sequence
 * @param on A function that receives a pair of items and decides whether to join them or not.
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
 *   rightJoin(dogs, (person, dog) => person.id === dog.ownerId),
 *   toArray()
 * ) // [[{id: 1, name: 'John'}, {id: 1, name: 'Lola', ownerId: 1}], [{id: 2, name: 'Jane'}, {id: 2, name: 'Luna', ownerId: 2}], [null, {id: 3, name: 'Max', ownerId: 4}]]
 */
export function rightJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T | null, O]> {
  return function (source) {
    return query(
      from(other),
      leftJoin(source, (left, right) => on(right, left)),
      select(([left, right]) => [right, left])
    )
  }
}
