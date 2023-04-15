import { assert, describe, expect, it } from 'vitest'
import { aggregate } from '../../lib'

describe('aggregate', () => {
  it('returns the seed if the iterable is empty', () => {
    const seed = 0
    const operator = aggregate<number, number>(
      seed,
      (result, item) => result + item
    )
    const source: number[] = []

    const result = operator(source)

    expect(result).toBe(seed)
  })

  it('calculates the result if the iterable is not empty', () => {
    const seed = 10
    const operator = aggregate<number, number>(
      seed,
      (result, item) => result + item
    )
    const source = [1, 2, 3]

    const result = operator(source)

    expect(result).toBe(10 + 1 + 2 + 3)
  })
})
