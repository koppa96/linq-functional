import { describe, expect, it } from 'vitest'
import { query, range, toArray } from '../../lib'

describe('range', () => {
  it('should return a sequence that contains the range of numbers specified', () => {
    const result = query(range(1, 5), toArray())
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
