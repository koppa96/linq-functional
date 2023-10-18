import { AsyncStarter } from '../types'

export function fromAsync<T>(source: AsyncIterable<T>): AsyncStarter<T> {
  return function () {
    return source
  }
}
