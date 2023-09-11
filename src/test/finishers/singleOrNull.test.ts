import { describe, expect, it } from 'vitest'
import { empty, from, query, singleOrNull } from '../../lib'

describe('singleOrNull', () => {
  it('should return null if the collection is empty', () => {
    const result = query(empty<number>(), singleOrNull())
    expect(result).toBe(null)
  })

  it('should return the singe element of the collection', () => {
    const result = query(from([1]), singleOrNull())
    expect(result).toBe(1)
  })

  it('should throw if there are multiple elements in the collection', () => {
    expect(() => {
      query(from([1, 2]), singleOrNull())
    }).toThrow()
  })

  it('should return null if no elements match condition', () => {
    const result = query(
      from([1, 2, 3]),
      singleOrNull(item => item > 3)
    )

    expect(result).toBe(null)
  })

  it('should return the single element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      singleOrNull(item => item > 2)
    )

    expect(result).toBe(3)
  })

  it('should throw if multiple elements match the condition', () => {
    expect(() => {
      query(
        from([1, 2, 3]),
        singleOrNull(item => item > 1)
      )
    }).toThrow()
  })
})
