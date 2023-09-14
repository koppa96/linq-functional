import { describe, expect, it } from 'vitest'
import { cast, from, query, toArray } from '../../lib'

describe('cast', () => {
  it('should return a casted version of the source iterable', () => {
    const source: unknown[] = [1, 2, 3]
    const result = query(from(source), cast<number>(), toArray())
    expect(result).toEqual(source)
  })
})
