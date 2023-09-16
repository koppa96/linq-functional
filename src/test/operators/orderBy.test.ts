import { describe, expect, it } from 'vitest'
import { Person } from '../utils/person'
import { from, orderBy, query, toArray } from '../../lib'

describe('orderBy', () => {
  it('should order the source based on the selected value', () => {
    const source: Person[] = [
      {
        name: 'Peter',
        age: 25,
      },
      {
        name: 'Jane',
        age: 23,
      },
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Julia',
        age: 27,
      },
    ]

    const result = query(
      from(source),
      orderBy(person => person.age),
      toArray()
    )

    expect(result).toEqual([
      {
        name: 'Jane',
        age: 23,
      },
      {
        name: 'Peter',
        age: 25,
      },
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Julia',
        age: 27,
      },
    ])
  })
})
