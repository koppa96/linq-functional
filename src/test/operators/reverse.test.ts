import { describe, expect, it } from 'vitest'
import { from, query, reverse, toArray } from '../../lib'

describe('reverse', () => {
  it('should reverse the original order of elements', () => {
    const result = query(from([1, 2, 3]), reverse(), toArray())
    expect(result).toEqual([3, 2, 1])
  })
})
