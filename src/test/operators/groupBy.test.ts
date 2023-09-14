import { describe, expect, it } from 'vitest'
import { empty, from, groupBy, query, toArray } from '../../lib'
import { Person } from '../utils/person'

describe('groupBy', () => {
  it('should return an empty result for an empty collection', () => {
    const result = query(
      empty<Person>(),
      groupBy(person => person.age),
      toArray()
    )
    expect(result).toEqual([])
  })

  it('should group the elements based on the key selector', () => {
    const source: Person[] = [
      {
        name: 'John Test',
        age: 25,
      },
      {
        name: 'Jane Test',
        age: 20,
      },
      {
        name: 'Janet Test',
        age: 25,
      },
    ]

    const result = query(
      from(source),
      groupBy(person => person.age),
      toArray()
    )

    expect(result[0].key).toBe(25)
    expect(result[1].key).toBe(20)

    expect(query(from(result[0]), toArray())).toEqual([
      {
        name: 'John Test',
        age: 25,
      },
      {
        name: 'Janet Test',
        age: 25,
      },
    ])

    expect(query(from(result[1]), toArray())).toEqual([
      {
        name: 'Jane Test',
        age: 20,
      },
    ])
  })
})
