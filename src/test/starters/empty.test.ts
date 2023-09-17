import { describe, expect, it } from 'vitest'
import { empty, query } from '../../lib'

describe('empty', () => {
  it('should return an empty sequence', () => {
    const result = query(empty())

    let itemCount = 0
    for (const element of result) {
      itemCount++
    }

    expect(itemCount).toBe(0)
  })
})
