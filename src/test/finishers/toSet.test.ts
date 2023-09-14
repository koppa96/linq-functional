import { describe, expect, it } from 'vitest'
import { empty, from, query, toSet } from '../../lib'

describe('toSet', () => {
  it('should return an empty set for an empty collection', () => {
    const result = query(empty<number>(), toSet())
    expect(result).toHaveLength(0)
  })

  it('should return the items of the source sequence in a set', () => {
    const result = query(from([1, 2, 3, 4, 4]), toSet())

    expect(result).toHaveLength(4)
    expect(result.has(1)).toBe(true)
    expect(result.has(2)).toBe(true)
    expect(result.has(3)).toBe(true)
    expect(result.has(4)).toBe(true)
  })
})
