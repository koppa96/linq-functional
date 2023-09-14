export function isIterable<T>(
  iterableOrElement: any
): iterableOrElement is Iterable<T> {
  return typeof iterableOrElement[Symbol.iterator] === 'function'
}
