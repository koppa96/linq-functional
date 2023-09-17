import { describe, expect, it } from 'vitest'
import { from, query, skipWhile, toArray } from '../../lib'

describe('skipWhile', () => {
  it('should skip items as long as the condition is true', () => {
    const result = query(
      from([1, 2, 3, 2, 5]),
      skipWhile(x => x < 3),
      toArray()
    )

    expect(result).toEqual([3, 2, 5])
  })
})
