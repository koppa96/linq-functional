import { Finisher } from '../types'

export function toMap<T, K>(keySelector: (item: T) => K): Finisher<T, Map<K, T>>
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
    for (const element of source()) {
      const key = keySelector(element)
      const value = valueSelector ? valueSelector(element) : element

      map.set(key, value)
    }

    return map
  }
}
