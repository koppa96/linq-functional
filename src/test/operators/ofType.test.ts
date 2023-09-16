import { describe, expect, it } from 'vitest'
import { from, ofType, query, toArray } from '../../lib'

function isNumber(value: any): value is number {
  return typeof value === 'number'
}

describe('ofType', () => {
  it('should filter and cast the elements', () => {
    const source: Array<string | number> = ['hello', 2, 5, 'bye', 6]

    const result = query(from(source), ofType(isNumber), toArray())
    expect(result).toEqual([2, 5, 6])
  })
})
