import { describe, expect, it } from 'vitest'
import { average } from '../../lib'

describe('average', () => {
  it('returns NaN for empty sequences', () => {
    const operator = average()
    const source: number[] = []

    const result = operator(source)

    expect(result).toBe(NaN)
  })

  it('returns the average for non-empty sequence', () => {
    const operator = average()
    const source = [1, 2, 3]

    const result = operator(source)

    expect(result).toBe((1 + 2 + 3) / 3)
  })
})
