import { describe, expect, it } from 'vitest'
import { distinctBy, empty, from, query, toArray } from '../../lib'
import { Person } from '../utils/person'

describe('distinctBy', () => {
  it('should return an empty collection for an empty collection', () => {
    const result = query(
      empty<Person>(),
      distinctBy(person => person.age),
      toArray()
    )
    expect(result).toEqual([])
  })

  it('should remove the duplications', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
      { name: 'John Test', age: 27 },
    ]

    const result = query(
      from(source),
      distinctBy(person => person.name),
      toArray()
    )
    expect(result).toEqual([
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ])
  })
})
