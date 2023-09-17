import { describe, expect, it } from 'vitest'
import { from, query, skip, toArray } from '../../lib'

describe('skip', () => {
  it('should return a sequence without the first N items', () => {
    const result = query(from([1, 2, 3, 4]), skip(2), toArray())
    expect(result).toEqual([3, 4])
  })

  it('should return an empty sequence if all the elements are skipped', () => {
    const result = query(from([1, 2, 3]), skip(6), toArray())
    expect(result).toEqual([])
  })
})
