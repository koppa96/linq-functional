import { Operator } from '../types'

/**
 * Creates an `Operator` that flattens the values projected by the `collectionSelector` into a single `Iterable`.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param collectionSelector A function that maps each item to an `Iterable`
 * @example
 * const people = [
 *   { name: 'John', dogs: ['Lola', 'Luna'] },
 *   { name: 'Jane', dogs: ['Max'] }
 * ]
 *
 * const allDogs = query(
 *   from(people),
 *   selectMany(person => person.dogs),
 *   toArray()
 * ) // ['Lola', 'Luna', 'Max']
 */
export function selectMany<T, R>(
  collectionSelector: (item: T) => Iterable<R>
): Operator<T, R>

/**
 * Creates an `Operator` that flattens the `Iterable`s projected by the `collectionSelector` into a single `Iterable`.
 * Applies a second mapping function to the result.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param collectionSelector A function that maps each item to an `Iterable`
 * @param resultSelector A function that maps an element and a flattened element into a new shape
 * @example
 * const people = [
 *   { name: 'John', dogs: ['Lola', 'Luna'] },
 *   { name: 'Jane', dogs: ['Max'] }
 * ]
 *
 * const allDogs = query(
 *   from(people),
 *   selectMany(person => person.dogs, (person, dog) => ({owner: person.name, dog})),
 *   toArray()
 * ) // [{owner: 'John', dog: 'Lola'}, {owner: 'John', dog: 'Luna'}, {owner: 'Jane', dog: 'Max'}]
 */
export function selectMany<T, C, R>(
  collectionSelector: (item: T) => Iterable<C>,
  resultSelector: (sourceItem: T, collectionItem: C) => R
): Operator<T, R>

export function selectMany<T>(
  collectionSelector: (item: T) => Iterable<unknown>,
  resultSelector?: (sourceItem: unknown, collectionItem: unknown) => unknown
): Operator<T, unknown> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          const collection = collectionSelector(element)
          for (const collectionElement of collection) {
            if (resultSelector) {
              yield resultSelector(element, collectionElement)
            } else {
              yield collectionElement
            }
          }
        }
      },
    }
  }
}
