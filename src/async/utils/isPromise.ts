export function isPromise<T>(
  value: AsyncIterable<T> | Promise<T>
): value is Promise<T> {
  return Object.prototype.hasOwnProperty.call(value, 'then')
}
