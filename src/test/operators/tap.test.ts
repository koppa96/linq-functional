import { describe, expect, it } from 'vitest'
import { from, query, tap, toArray } from '../../lib'

describe('tap', () => {
  it('should execute the action for each element', () => {
    const resultArray: number[] = []

    query(
      from([1, 2, 3]),
      tap(item => resultArray.push(item)),
      toArray()
    )

    expect(resultArray).toEqual([1, 2, 3])
  })
})
