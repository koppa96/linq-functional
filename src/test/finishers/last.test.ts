import { describe, expect, it } from 'vitest'
import { empty, from, last, query } from '../../lib'

describe('last', () => {
  it('should throw if the collection is empty', () => {
    expect(() => {
      query(empty<number>(), last())
    }).toThrow()
  })

  it('should return the last element of the collection', () => {
    const result = query(from([1, 2, 3]), last())
    expect(result).toBe(3)
  })

  it('should throw if no elements match condition', () => {
    expect(() => {
      query(
        from([1, 2, 3]),
        last(item => item > 3)
      )
    }).toThrow()
  })

  it('should return the last element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      last(item => item < 3)
    )

    expect(result).toBe(2)
  })
})
