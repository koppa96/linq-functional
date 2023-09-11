import { describe, expect, it } from 'vitest'
import { empty, from, query, sequenceEquals } from '../../lib'

describe('sequenceEquals', () => {
  it('should mark empty sequences equal', () => {
    const result = query(empty<number>(), sequenceEquals<number>([]))
    expect(result).toBe(true)
  })

  it('should not consider sequences of different length equal', () => {
    const result = query(from([1, 1]), sequenceEquals([1, 1, 1]))
    expect(result).toBe(false)

    const result2 = query(from([1, 1, 1]), sequenceEquals([1, 1]))
    expect(result2).toBe(false)
  })

  it('should not consider sequences with same length but different elements equal', () => {
    const result = query(from([1, 2]), sequenceEquals([1, 3]))
    expect(result).toBe(false)
  })

  it('should consider sequences with same length and same elements equal', () => {
    const result = query(from([1, 2, 3]), sequenceEquals([1, 2, 3]))
    expect(result).toBe(true)
  })
})
