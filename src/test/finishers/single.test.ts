import { describe, expect, it } from 'vitest'
import { empty, from, query, single } from '../../lib'

describe('single', () => {
  it('should throw if the collection is empty', () => {
    expect(() => {
      query(empty<number>(), single())
    }).toThrow()
  })

  it('should return the singe element of the collection', () => {
    const result = query(from([1]), single())
    expect(result).toBe(1)
  })

  it('should throw if there are multiple elements in the collection', () => {
    expect(() => {
      query(from([1, 2]), single())
    }).toThrow()
  })

  it('should throw if no elements match condition', () => {
    expect(() => {
      query(
        from([1, 2, 3]),
        single(item => item > 3)
      )
    }).toThrow()
  })

  it('should return the single element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      single(item => item > 2)
    )

    expect(result).toBe(3)
  })

  it('should throw if multiple elements match the condition', () => {
    expect(() => {
      query(
        from([1, 2, 3]),
        single(item => item > 1)
      )
    }).toThrow()
  })
})
