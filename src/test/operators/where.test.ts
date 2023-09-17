import { describe, expect, it } from 'vitest'
import { from, query, toArray, where } from '../../lib'

describe('where', () => {
  it('should return the items that match the condition', () => {
    const result = query(
      from([1, 2, 3, 4]),
      where(item => item % 2 === 0),
      toArray()
    )
    expect(result).toEqual([2, 4])
  })
})
