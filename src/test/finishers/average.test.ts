import { describe, expect, it } from 'vitest'
import { average, empty, from, query } from '../../lib'

describe('average', () => {
  it('returns NaN for empty sequences', () => {
    const result = query(empty<number>(), average())

    expect(result).toBe(NaN)
  })

  it('returns the average for non-empty sequence', () => {
    const result = query(from([1, 2, 3]), average())

    expect(result).toBe((1 + 2 + 3) / 3)
  })
})
