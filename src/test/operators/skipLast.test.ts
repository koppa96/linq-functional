import { describe, expect, it } from 'vitest'
import { from, query, skipLast, toArray } from '../../lib'

describe('skipLast', () => {
  it('should return a sequence without the last N items', () => {
    const result = query(from([1, 2, 3, 4]), skipLast(2), toArray())
    expect(result).toEqual([1, 2])
  })
})
