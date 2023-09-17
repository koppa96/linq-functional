import { describe, expect, it } from 'vitest'
import { Person } from '../utils/person'
import { from, orderBy, orderByDescending, query, toArray } from '../../lib'

describe('orderBy', () => {
  it('should perform a stable ordering in descending order by the selected values', () => {
    const source: Person[] = [
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Peter',
        age: 25,
      },
      {
        name: 'Jane',
        age: 23,
      },
      {
        name: 'Julia',
        age: 27,
      },
    ]

    const result = query(
      from(source),
      orderByDescending(person => person.age),
      toArray()
    )

    expect(result).toEqual([
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Julia',
        age: 27,
      },
      {
        name: 'Peter',
        age: 25,
      },
      {
        name: 'Jane',
        age: 23,
      },
    ])
  })
})
