import { describe, expect, it } from 'vitest'
import { empty, from, query, sum } from '../../lib'

describe('sum', () => {
  it('should return zero for an empty collection', () => {
    const result = query(empty<number>(), sum())
    expect(result).toBe(0)
  })

  it('should return the correct sum if the collection is not empty', () => {
    const result = query(from([1, 2, 3]), sum())
    expect(result).toBe(1 + 2 + 3)
  })
})
