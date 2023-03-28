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

const result = query(
  from([1, 6, 3, 7, 5, 2]),
  where(item => item > 3)
)

const res2 = query(result, max())
const fst = query(result, first())

console.log({ res2, fst })
