import { describe, expect, it } from 'vitest'
import { distinct, empty, from, query, toArray } from '../../lib'
import { Person } from '../utils/person'

describe('distinct', () => {
  it('should return an empty collection for an empty collection', () => {
    const result = query(empty<number>(), distinct(), toArray())
    expect(result).toEqual([])
  })

  it('should remove the duplications', () => {
    const result = query(from([1, 2, 3, 2, 2, 4, 3]), distinct(), toArray())
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('should remove the duplications with custom equality check', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
      { name: 'John Test', age: 25 },
    ]

    const result = query(
      from(source),
      distinct((p1, p2) => p1.name === p2.name && p1.age === p2.age),
      toArray()
    )

    expect(result).toEqual([
      {
        name: 'John Test',
        age: 25,
      },
      {
        name: 'Jane Test',
        age: 23,
      },
    ])
  })
})
