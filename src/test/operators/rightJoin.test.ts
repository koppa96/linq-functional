import { describe, expect, it } from 'vitest'
import { empty, from, query, rightJoin, toArray } from '../../lib'

interface Person {
  id: number
  name: string
}

interface Dog {
  id: number
  name: string
  personId: number
}

describe('rightJoin', () => {
  it('should return an empty collection if the target is empty', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
    ]

    const result = query(
      from(people),
      rightJoin([] as Dog[], (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([])
  })

  it('should join null if the source is empty', () => {
    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 2,
      },
    ]

    const result = query(
      empty<Person>(),
      rightJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        null,
        {
          id: 1,
          name: 'Lola',
          personId: 2,
        },
      ],
    ])
  })

  it('should join null to the target if there are no matching pairs', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
    ]

    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 2,
      },
    ]

    const result = query(
      from(people),
      rightJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        null,
        {
          id: 1,
          name: 'Lola',
          personId: 2,
        },
      ],
    ])
  })

  it('should join matching elements', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Jane',
      },
    ]

    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 2,
      },
      {
        id: 2,
        name: 'Luna',
        personId: 3,
      },
    ]

    const result = query(
      from(people),
      rightJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        {
          id: 2,
          name: 'Jane',
        },
        {
          id: 1,
          name: 'Lola',
          personId: 2,
        },
      ],
      [
        null,
        {
          id: 2,
          name: 'Luna',
          personId: 3,
        },
      ],
    ])
  })
})
