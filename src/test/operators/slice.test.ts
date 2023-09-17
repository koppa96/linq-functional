import { describe, expect, it } from 'vitest'
import { from, query, slice, toArray } from '../../lib'

describe('slice', () => {
  it('should return the items with the correct offset and end', () => {
    const result = query(from([1, 2, 3, 4]), slice(1, 3), toArray())
    expect(result).toEqual([2, 3])
  })
})
