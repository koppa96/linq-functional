import { describe, expect, it } from 'vitest'
import { from, query, takeWhile, toArray } from '../../lib'

describe('takeWhile', () => {
  it('should take items as long as the condition is true', () => {
    const result = query(
      from([1, 2, 3, 2, 5]),
      takeWhile(x => x < 3),
      toArray()
    )

    expect(result).toEqual([1, 2])
  })
})
