import { describe, expect, it } from 'vitest'
import { Person } from '../utils/person'
import { from, query, selectMany, toArray } from '../../lib'

// This kind of person surely has dogs
type DogPerson = Person & { dogs: string[] }

describe('selectMany', () => {
  it('should flatten the object hierarchy', () => {
    const source: Array<DogPerson> = [
      {
        name: 'John',
        age: 25,
        dogs: ['Lola', 'Luna'],
      },
      {
        name: 'Jane',
        age: 31,
        dogs: ['Rocky'],
      },
    ]

    const result = query(
      from(source),
      selectMany(person => person.dogs),
      toArray()
    )

    expect(result).toEqual(['Lola', 'Luna', 'Rocky'])
  })

  it('should map the flattened items if a result selector is given', () => {
    const source: Array<DogPerson> = [
      {
        name: 'John',
        age: 25,
        dogs: ['Lola', 'Luna'],
      },
      {
        name: 'Jane',
        age: 31,
        dogs: ['Rocky'],
      },
    ]

    const result = query(
      from(source),
      selectMany(
        person => person.dogs,
        (person, dog) => ({ dog, owner: person.name })
      ),
      toArray()
    )

    expect(result).toEqual([
      { dog: 'Lola', owner: 'John' },
      { dog: 'Luna', owner: 'John' },
      { dog: 'Rocky', owner: 'Jane' },
    ])
  })
})
