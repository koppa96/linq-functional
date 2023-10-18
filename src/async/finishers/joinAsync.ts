import { AsyncFinisher } from '../types'
import { toArrayAsync } from './toArrayAsync'

export function joinAsync(separator?: string): AsyncFinisher<string, string> {
  return async function (source) {
    const resultArray = await toArrayAsync<string>()(source)
    return resultArray.join(separator)
  }
}
