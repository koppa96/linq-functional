import { describe, expect, it } from 'vitest'
import { Person } from '../utils/person'
import { from, query, select, toArray } from '../../lib'

describe('select', () => {
  it('should return mapped items', () => {
    const source: Person[] = [
      {
        name: 'John',
        age: 25,
      },
      {
        name: 'Jane',
        age: 31,
      },
    ]

    const result = query(
      from(source),
      select(person => person.name),
      toArray()
    )
    expect(result).toEqual(['John', 'Jane'])
  })
})
