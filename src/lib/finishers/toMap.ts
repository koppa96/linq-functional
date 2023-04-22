import { Finisher } from '../types'

/**
 * Iterates the source sequence and returns it as a map, where the keys
 * for each element are selected by the given key selector
 * @param keySelector A function that determines which key to assign for each element in the result map
 * @returns A finisher operator configured by the given parameters
 * @example
 * const people = [
 *   {
 *     name: "John Test",
 *     age: 25
 *   },
 *   {
 *     name: "Jane Test",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   toMap(person => person.name)
 * )
 * console.log(result) // Outputs a map with keys "John Test" and "Jane Test" that point to their respectable elements
 */
export function toMap<T, K>(keySelector: (item: T) => K): Finisher<T, Map<K, T>>

/**
 * Iterates the source sequence and returns it as a map, where the keys
 * for each element are selected by the given key selector, and values are selected
 * by the given value selector.
 * @param keySelector A function that determines which key to assign for each element in the result map
 * @param valueSelector A function that determines which value to assign of the key of the element
 * @returns A finisher operator configured by the given parameters
 * @example
 * const people = [
 *   {
 *     name: "John Test",
 *     age: 25
 *   },
 *   {
 *     name: "Jane Test",
 *     age: 20
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   toMap(person => person.name, person => person.age)
 * )
 * console.log(result) // Outputs a map with "John Test" -> 25 and "Jane Test" -> 20 as key-value pairs.
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
    for (const element of source) {
      const key = keySelector(element)
      const value = valueSelector ? valueSelector(element) : element

      map.set(key, value)
    }

    return map
  }
}
