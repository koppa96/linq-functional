import { Finisher } from '../types'

/**
 * Creates a `Finisher` that collects the items of the source `Iterable` into a map where the keys
 * for each item are selected by the given key selector.
 * @param keySelector A function that determines which key to assign for each item in the result map
 * @example
 * const people = [
 *   {
 *     name: "John ",
 *     age: 25
 *   },
 *   {
 *     name: "Jane",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   toMap(person => person.name)
 * ) // A map with keys "John" and "Jane" that point to their respectable items
 */
export function toMap<T, K>(keySelector: (item: T) => K): Finisher<T, Map<K, T>>

/**
 * Creates a `Finisher` that collects the items of the source `Iterable` into a map where the keys
 * for each item are selected by the given key selector, and values are selected
 * by the given value selector.
 * @param keySelector A function that determines which key to assign for each item in the result map
 * @param valueSelector A function that determines which value to assign of the key of the item
 * @returns A finisher operator configured by the given parameters
 * @example
 * const people = [
 *   {
 *     name: "John",
 *     age: 25
 *   },
 *   {
 *     name: "Jane",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   toMap(person => person.name, person => person.age)
 * ) // A map with "John" -> 25 and "Jane" -> 20 as key-value pairs.
 */
export function toMap<T, K, V>(
  keySelector: (item: T) => K,
  valueSelector: (item: T) => V
): Finisher<T, Map<K, V>>

export function toMap<T, K>(
  keySelector: (item: T) => K,
  valueSelector?: (item: T) => unknown
): Finisher<T, Map<K, unknown>> {
  return function (source) {
    const map = new Map<K, unknown>()
    for (const item of source) {
      const key = keySelector(item)
      const value = valueSelector ? valueSelector(item) : item

      map.set(key, value)
    }

    return map
  }
}
