import { describe, expect, it } from 'vitest'
import { Person } from '../utils/person'
import { from, pick, query, toArray } from '../../lib'

describe('pick', () => {
  it('should return the flattened values if a single property is picked', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(from(source), pick('name'), toArray())
    expect(result).toEqual(['John Test', 'Jane Test'])
  })

  it('should return the picked values in an object', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25, dogs: [] },
      { name: 'Jane Test', age: 23, dogs: [] },
    ]

    const result = query(from(source), pick('name', 'dogs'), toArray())
    expect(result).toEqual([
      { name: 'John Test', dogs: [] },
      { name: 'Jane Test', dogs: [] },
    ])
  })
})
