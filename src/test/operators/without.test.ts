import { describe, expect, it } from 'vitest'
import { from, query, toArray, without } from '../../lib'

describe('without', () => {
  it('should return the elements of the source sequence that are not present in the other sequence', () => {
    const result = query(from([1, 2, 3, 4]), without([4, 5]), toArray())
    expect(result).toEqual([1, 2, 3])
  })
})
