import { query } from './query'
import { from } from './starters/from'
import { where } from './operators/where'
import { min } from './finishers/min'

const result = query(
  from([1, 2, 3]),
  where(x => x > 1),
  min()
)

console.log(result)
