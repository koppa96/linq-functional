import { query } from './query'
import { from } from './starters/from'
import { take } from './operators/take'
import { toArray } from './finishers/toArray'
import { skip } from './operators/skip'
import { select } from './operators/select'
import { toMap } from './finishers/toMap'
import { selectMany } from './operators/selectMany'
import { where } from './operators/where'
import { first } from './finishers/first'
import { last } from './finishers/last'
import { max } from './finishers/max'
import { count } from './finishers/count'
import { groupBy } from './operators/groupBy'

interface Person {
  name: string
  age: number
}

const people: Person[] = [
  { name: 'A', age: 16 },
  { name: 'B', age: 23 },
  { name: 'C', age: 16 },
  { name: 'D', age: 11 },
  { name: 'E', age: 23 },
  { name: 'F', age: 16 },
]

const result = query(
  from(people),
  groupBy(person => person.age)
)

for (const group of result) {
  console.log(`Key: ${group.key}`)
  for (const element of group) {
    console.log(element.name)
  }
}
