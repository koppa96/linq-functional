import { describe, expect, it } from 'vitest'
import { from, query, takeLast, toArray } from '../../lib'

describe('takeLast', () => {
  it('should return the last element of the source sequence', () => {
    const result = query(from([1, 2, 3]), takeLast(), toArray())
    expect(result).toEqual([3])
  })

  it('should return the last N element of the source sequence', () => {
    const result = query(from([1, 2, 3]), takeLast(2), toArray())
    expect(result).toEqual([2, 3])
  })

  it('should return all the elements of the source sequence if the amount is greater', () => {
    const result = query(from([1, 2, 3]), takeLast(5), toArray())
    expect(result).toEqual([1, 2, 3])
  })
})
