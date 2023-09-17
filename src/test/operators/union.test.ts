import { describe, expect, it } from 'vitest'
import { from, query, toArray, union } from '../../lib'

describe('union', () => {
  it('should return the distinct items that are present in any of the collections', () => {
    const result = query(from([1, 2, 3, 2]), union([2, 2, 1, 4]), toArray())
    expect(result).toEqual([1, 2, 3, 4])
  })
})
