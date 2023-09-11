import { describe, expect, it } from 'vitest'
import { empty, first, from, query } from '../../lib'

describe('first', () => {
  it('should throw if the collection is empty', () => {
    expect(() => {
      query(empty<number>(), first())
    }).toThrow()
  })

  it('should return the first element of the collection', () => {
    const result = query(from([1, 2, 3]), first())
    expect(result).toBe(1)
  })

  it('should throw if no elements match condition', () => {
    expect(() => {
      query(
        from([1, 2, 3]),
        first(item => item > 3)
      )
    }).toThrow()
  })

  it('should return the first element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      first(item => item > 2)
    )

    expect(result).toBe(3)
  })
})
