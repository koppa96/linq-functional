import { query } from './query'
import { from } from './starters/from'
import { max } from './finishers/max'
import { where } from './operators/where'

const result = query(
  from([1, 2, 3]),
  where(x => x < 3),
  max()
)

console.log(result)
