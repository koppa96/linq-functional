---
layout: doc
prev:
  text: Starters
  link: /api-reference/starters
next:
  text: Finishers
  link: /api-reference/finishers
---

# Operators

[Operator](/api-reference/types.html#operator) is a function that receives an `Iterable` as an argument, and returns an other `Iterable`. Can be used to transform the source `Iterable` by any custom logic. A query can be composed of multiple operators.

## Append

Creates an `Operator` that yields all the items from the source `Iterable`, then yields the items passed as argument.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function append<T>(items: Iterable<T>): Operator<T, T>
```

#### Arguments

- `items`: `Iterable<T>` - The items to yield after all items of the source were yielded

#### Example

```ts
const result = query(from([1, 2]), append([3, 4]))

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
```

### Overload #2

```ts
function append<T>(item: T, ...rest: T[]): Operator<T, T>
```

#### Arguments

- `item`: `T` - The first item to yield after all items of the source were yielded
- `...rest`: `T[]` - The items to yield after the first item was yielded

#### Example

```ts
const result = query(from([1, 2]), append(3, 4))

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
```

## Cast

Simply casts the source `Iterable` to the desired type. **Does no type checking.** This operator is only supposed to be used if you - for some reason - know that the contents of the source will only contain a specific type of items. For other scenarios [ofType](/api-reference/operators.html#oftype) is recommended.

```ts
function cast<T>(): Operator<unknown, T>
```

### Example

```ts
const source: unknown[] = [1, 2]

const result = query(from(source), cast<number>())

for (const item of result) {
  console.log(item) // item: number, not unknown an
}
```

### Output

```txt
1
2
```

## Chunk

Creates an `Operator` that transforms the source `Iterable` to a new one that has the items of the original, in evenly sized batches. The last chunk may have fewer items, if the total length of the source is not divisible by the chunk size.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function chunk<T>(size: number): Operator<T, T[]>
```

### Arguments

- `size`: `number` - The size of the chunks

### Example

```ts
const chunks = query(
  from([1, 2, 3, 4, 5]),
  chunk(2)
)

for (const chunk of chunks) {
  console.log('Chunk start')
  for (const item of chunk) {
    console.log(item)
  }
}
```

### Output

```txt
Chunk start
1
2
Chunk start
3
4
Chunk start
5
```

## CrossJoin

Creates an `Operator` that produces the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of the source `Iterable` and the provided `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function crossJoin<T, O>(other: Iterable<O>): Operator<T, [T, O]>
```

### Arguments

- `other`: `Iterable<O>` - The `Iterable` to join to the source. Can have a different item type as the source iterable.

### Example

```ts
const source = [1, 2, 3]
const other = ['one', 'two', 'three']

const result = query(from(source), crossJoin(other))
for (const item of result) {
  console.log(item)
}
```

### Output

```txt
[1, 'one']
[1, 'two']
[1, 'three']
[2, 'one']
[2, 'two']
[2, 'three']
[3, 'one']
[3, 'two']
[3, 'three']
```

## Distinct

Creates an `Operator` that filters out the duplicated items from the source `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function distinct<T>(equalityCheck?: EqualityCheck<T>): Operator<T, T>
```

### Arguments

- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if two items of the source are considered equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 4, 2, 2, 3, 1]),
  distinct()
)

for (const item of result) {
  console.log(item)
}
```

### Output

```ts
1
2
4
3
```

## DistinctBy

Creates an `Operator` that filters out the items from the source `Iterable` which are considered duplicate by the provided selector's value.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function distinctBy<T, R>(
  selector: (item: T) => R,
  equalityCheck?: EqualityCheck<R>
): Operator<T, T>
```

### Argument

- `selector`: `(item: T) => R` - A function that selects a value for each item. This value is used to check if the item is distinct.
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if two items of the source are considered equal. Defaults to the `===` operator.

### Example

```ts
const source = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
]

const result = query(
  from(source),
  distinctBy(item => item.id),
  toArray()
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
{ id: 1, name: 'John' }
{ id: 2, name: 'Jane' }
```

## GroupBy

Creates an `Operator` that groups the items of the source `Iterable` by the values selected by the provided selector.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
type Grouping<K, T> = Iterable<T> & { key: K }

function groupBy<T, K>(
  keySelector: (item: T) => K,
  equalityCheck?: EqualityCheck<K>
): Operator<T, Grouping<K, T>>
```

### Arguments

- `keySelector`: `(item: T) => K` - A function that selects a value for each item. This value will be used to group the items by.
- `equalityCheck`: `EqualityCheck<K>` (optional) - A function that can determine if two keys selected by the `keySelector` are considered equal. Defaults to the `===` operator.

### Example

```ts
const people = [
  { name: "John Test", age: 25 },
  { name: "Jane Test", age: 20 },
  { name: "Janet Test", age: 25 }
]

const groups = query(
  from(people),
  groupBy(person => person.age)
)

for (const group of groups) {
  console.log(group.key)
  for (const item of group) {
    console.log(item)
  }
}
```

### Output

```txt
25
{ name: "John Test", age: 25 }
{ name: "Janet Test", age: 25 }
20
{ name: "Jane Test", age: 20 }
```

## InnerJoin

Creates an `Operator` that performs an operation like SQL's inner join of database tables. Emits a pair of items if the join condition evaluates to `true`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function innerJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O]>
```

### Arguments

- `other`: `Iterable<O>` - The `Iterable` that contains the items to join with the source
- `on`: `(left: T, right: O) => boolean` - A function that receives a pair of items and decides whether to join them or not

### Example

```ts
const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
  {
    id: 3,
    name: 'Janet'
  }
]

const dogs = [
  {
    id: 1,
    name: 'Lola',
    ownerId: 1
  },
  {
    id: 2,
    name: 'Luna',
    ownerId: 2
  },
  {
    id: 3,
    name: 'Max',
    ownerId: 4
  }
]

const result = query(
  from(people),
  innerJoin(dogs, (person, dog) => person.id === dog.ownerId)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
[{id: 1, name: 'John'}, {id: 1, name: 'Lola', ownerId: 1}]
[{id: 2, name: 'Jane'}, {id: 2, name: 'Luna', ownerId: 2}]
```

## Insert

Creates an `Operator` that yields the items from the source up to the specified index, then yields the provided items, then yields the rest of the source. Throws an error if the index is out of range.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function insert<T>(index: number, items: Iterable<T>): Operator<T, T>
```

#### Arguments

- `index`: `number` - The 0 based index to insert the items to
- `items`: `Iterable<T>` - The items to insert at the desired position

#### Example

```ts
const result = query(
  from([1, 2, 5]),
  insert(2, [3, 4])
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
5
```

### Overload #2

```ts
function insert<T>(index: number, item: T, ...rest: T[]): Operator<T, T>
```

#### Arguments

- `index`: `number` - The 0 based index to insert the items to
- `item`: `T` - The first item to insert at the desired position
- `...rest`: `T[]` - The rest of the items to insert after the first item

#### Example

```ts
const result = query(
  from([1, 2, 5]),
  insert(2, 3, 4)
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
5
```

## Intersect

Creates an `Operator` that calculates the set intersection of the source `Iterable` and the target `Iterable`. If an item is present in both of the iterables it will be included in the result. Duplicated items will only be included once.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function intersect<T>(items: Iterable<T>, equalityCheck?: EqualityCheck<T>): Operator<T, T>
```

### Arguments

- `items`: `Iterable<T>` - The items to intersect the source with
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if an item in the source and an item in the intersected `Iterable` are considered equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 3, 4, 5]),
  intersect([2, 4, 6, 8]),
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
2
4
```

## LeftJoin

Creates an `Operator` that performs an operation like SQL's left join of database tables. If the join condition does not evaluate true for an item of the source `Iterable`, the item will be emitted with a `null` joined to it.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function leftJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O | null]>
```

### Arguments

- `other`: `Iterable<O>` - The `Iterable` that contains the items to join with the source
- `on`: `(left: T, right: O) => boolean` - A function that receives a pair of items and decides whether to join them or not

### Example

```ts
const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
  {
    id: 3,
    name: 'Janet'
  }
]

const dogs = [
  {
    id: 1,
    name: 'Lola',
    ownerId: 1
  },
  {
    id: 2,
    name: 'Luna',
    ownerId: 2
  },
  {
    id: 3,
    name: 'Max',
    ownerId: 4
  }
]

const result = query(
  from(people),
  leftJoin(dogs, (person, dog) => person.id === dog.ownerId)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
[{id: 1, name: 'John'}, {id: 1, name: 'Lola', ownerId: 1}]
[{id: 2, name: 'Jane'}, {id: 2, name: 'Luna', ownerId: 2}]
[{id: 3, name: 'Janet'}, null]
```

## OfType

Creates an `Operator` that applies the provided type guard function to filter and cast the items that satisfy it.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function ofType<T>(
  typeGuard: (item: unknown) => item is T
): Operator<unknown, T>
```

### Arguments

- `typeGuard`: `(item: unknown) => item is T` - A function that determines the type of the item

### Example

```ts
function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

const source = ['one', 2, 'three', 4]
const result = query(
  from(source),
  ofType(isNumber)
)

for (const item of result) {
  console.log(item) // item: number
}
```

### Output

```txt
2
4
```

## OrderBy

Creates an `Operator` that performs an ascending ordering by the selected values and the comparator function. The sorting algorithm is stable, so performing subsequent orderings will keep the order of the items within equality groups.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function orderBy<T, R>(
  selector: (item: T) => R,
  comparator?: Comparator<R>
): Operator<T, T>
```

### Arguments

- `selector`: `(item: T) => R` - A function that selects a value for each item. This value will be used to determine the position of the item in the ordered result
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 39
  },
  {
    name: 'Jane',
    age: 32
  },
  {
    name: 'Janet',
    age: 39
  }
]

const result = query(
  from(people),
  orderBy(person => person.age)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
{ name: 'Jane', age: 32 }
{ name: 'John', age: 39 }
{ name: 'Janet', age: 39 }
```

## OrderByDescending

Creates an `Operator` that performs a descending ordering by the selected values and the comparator function. The sorting algorithm is stable, so performing subsequent orderings will keep the order of the items within equality groups.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function orderByDescending<T, P>(
  selector: (item: T) => P,
  comparator: Comparator<P> = defaultComparator
): Operator<T, T>
```

### Arguments

- `selector`: `(item: T) => R` - A function that selects a value for each item. This value will be used to determine the position of the item in the ordered result
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 39
  },
  {
    name: 'Jane',
    age: 32
  },
  {
    name: 'Janet',
    age: 39
  }
]

const result = query(
  from(people),
  orderByDescending(person => person.age)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
{ name: 'John', age: 39 }
{ name: 'Janet', age: 39 }
{ name: 'Jane', age: 32 }
```

## Pick

Creates an `Operator` that picks the value(s) of the specified key(s) from each item.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function pick<T, K extends keyof T>(key: K): Operator<T, T[K]>
```

#### Arguments

- `key`: `K` - A key of the item of the source

#### Example

```ts
const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
]

const result = query(
  from(people),
  pick('name')
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
John
Jane
```

### Overload #2

```ts
function pick<T, K1 extends keyof T, K2 extends keyof Omit<T, K1>>(
  key1: K1,
  key2: K2
): Operator<T, Pick<T, K1 | K2>>
```

> **_NOTE:_** This function has strongly typed overloads up to 10 picked keys. The documentation will not cover every overload, since they behave like this one.

#### Arguments

- `key1`: `K1` - A key of the item of the source
- `key2`: `K2` - A key of the item of the source, that is not equal to `key1`

#### Example

```ts
const people = [
  {
    id: 1,
    name: 'John',
    someOtherProp: 3
  },
  {
    id: 2,
    name: 'Jane',
    someOtherProp: 5
  },
]

const result = query(
  from(people),
  pick('id', 'name')
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
{ id: 1, name: 'John' }
{ id: 2, name: 'Jane' }
```

## Prepend

Creates an `Operator` that yields all items passed as argument, then yields the items from the source `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function prepend<T>(items: Iterable<T>): Operator<T, T>
```

#### Arguments

- `items`: `Iterable<T>` - An `Iterable` containing the items to prepend

#### Example

```ts
const result = query(
  from([4, 5, 6]),
  prepend([1, 2, 3])
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
5
6
```

### Overload #2

```ts
function prepend<T>(item: T, ...rest: T[]): Operator<T, T>
```

#### Arguments

- `item`: `Iterable<T>` - The first item to yield
- `...rest`: `T[]` - The rest of the items to yield before the first item of the source

#### Example

```ts
const result = query(
  from([4, 5, 6]),
  prepend(1, 2, 3)
)

for (const item of result) {
  console.log(item)
}
```

#### Output

```txt
1
2
3
4
5
6
```

## Reverse

Creates an `Operator` that returns a new `Iterable` that contains the items of the source in reverse order.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function reverse<T>(): Operator<T, T>
```

### Example

```ts
const result = query(
  from([1, 2, 3]),
  reverse()
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
3
2
1
```

## RightJoin

Creates an `Operator` that performs an operation like SQL's right join of database tables. If the join condition does not evaluate true for an item of the target `Iterable`, the item will be emitted with a `null` joined to it.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function rightJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T | null, O]>
```

### Arguments

- `other`: `Iterable<O>` - The `Iterable` that contains the items to join with the source
- `on`: `(left: T, right: O) => boolean` - A function that receives a pair of items and decides whether to join them or not

### Example

```ts
const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
  {
    id: 3,
    name: 'Janet'
  }
]

const dogs = [
  {
    id: 1,
    name: 'Lola',
    ownerId: 1
  },
  {
    id: 2,
    name: 'Luna',
    ownerId: 2
  },
  {
    id: 3,
    name: 'Max',
    ownerId: 4
  }
]

const result = query(
  from(people),
  rightJoin(dogs, (person, dog) => person.id === dog.ownerId)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
[{id: 1, name: 'John'}, {id: 1, name: 'Lola', ownerId: 1}]
[{id: 2, name: 'Jane'}, {id: 2, name: 'Luna', ownerId: 2}]
[null, {id: 3, name: 'Max', ownerId: 4}]
```

## Select

Creates an `Operator` that projects the items of the source sequence using the provided function.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function select<T, R>(
  selector: (item: T, index: number) => R
): Operator<T, R>
```

### Arguments

- `selector`: `(item: T, index: number) => R` - A function that transforms an item to the desired shape

### Example

```ts
const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
  {
    id: 3,
    name: 'Janet'
  }
]

const names = query(
  from(people),
  select(person => person.name),
)

for (const name of names) {
  console.log(name)
}
```

### Output

```txt
John
Jane
Janet
```

## SelectMany

Creates an `Operator` that flattens the values projected by the `collectionSelector` into a single `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function selectMany<T, R>(
  collectionSelector: (item: T) => Iterable<R>
): Operator<T, R>
```

#### Arguments

- `collectionSelector`: `(item: T) => Iterable<R>` - Projects an item to an `Iterable`. These iterables are going to be flattened into a single one.

#### Example

```ts
const people = [
  { name: 'John', dogs: ['Lola', 'Luna'] },
  { name: 'Jane', dogs: ['Max'] }
]

const allDogs = query(
  from(people),
  selectMany(person => person.dogs)
)

for (const dog of allDogs) {
  console.log(dog)
}
```

#### Output

```txt
Lola
Luna
Max
```

### Overload #2

Applies a second mapping function to the result.

```ts
function selectMany<T, C, R>(
  collectionSelector: (item: T) => Iterable<C>,
  resultSelector: (sourceItem: T, collectionItem: C) => R
): Operator<T, R>
```

#### Arguments

- `collectionSelector`: `(item: T) => Iterable<R>` - Projects an item to an `Iterable`. These iterables are going to be flattened into a single one.
- `resultSelector`: `(sourceItem: T, collectionItem: C) => R` - Projects the source item and the item selected by the `collectionSelector` into a new shape before flattening the source.

#### Example

```ts
const people = [
  { name: 'John', dogs: ['Lola', 'Luna'] },
  { name: 'Jane', dogs: ['Max'] }
]

const allDogs = query(
  from(people),
  selectMany(person => person.dogs, (person, dog) => ({ owner: person.name, dog }))
)

for (const dog of allDogs) {
  console.log(dog)
}
```

#### Output

```txt
{ owner: 'John', dog: 'Lola' }
{ owner: 'John', dog: 'Luna' }
{ owner: 'Jane', dog: 'Max' }
```

## Skip

Creates an `Operator` that omits the first elements of the source `Iterable`. If there are not enough items in the source, all items are omitted.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function skip<T>(amount: number): Operator<T, T>
```

### Arguments

- `amount`: `number` - The amount of items to omit

### Example

```ts
const result = query(
  from([1, 2, 3, 4]),
  skip(2)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
3
4
```

## SkipLast

Creates an `Operator` that omits the last items of the source `Iterable`. If there are not enough items in the source, all items are omitted.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function skipLast<T>(amount?: number): Operator<T, T>
```

### Arguments

- `amount`: `number` (optional) - The amount of items to omit. Defaults to `1`.

### Example

```ts
const result = query(
  from([1, 2, 3, 4]),
  skipLast(2)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
```

## SkipWhile

Creates an `Operator` that omits the items of the source `Iterable` while the provided function returns true for each item. If the condition returns false for an item, that item and the items after that will be included in the result.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function skipWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T>
```

### Arguments

- `predicate`: `(item: T, index: number) => boolean` - A function that decides if an item should be omitted

### Example

```ts
const result = query(
  from([1, 2, 3, 2, 5, 1]),
  skipWhile(item => item < 3)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
3
2
5
1
```

## Slice

Creates an `Operator` that yields the items of the source between two indices as an `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function slice<T>(startIndex: number, endIndex: number): Operator<T, T>
```

### Arguments

- `startIndex`: `number` - The index of the first item (inclusive)
- `endIndex`: `number` - The index of the last item (exclusive)

### Example

```ts
const result = query(
  from([1, 2, 3, 4, 5]),
  slice(1, 3)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```ts
2
3
```

## Take

Creates an `Operator` that yields the first items of the source `Iterable`. If there are not enough items in the source, all items are yielded.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function take<T>(amount: number): Operator<T, T>
```

### Arguments

- `amount`: `number` - The amount of elements to include in the result

### Example

```ts
const result = query(
  from([1, 2, 3, 4]),
  take(3)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
3
```

## TakeLast

Creates an `Operator` that yields the last items of the source `Iterable`. If there are not enough items in the source, all items are yielded.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function takeLast<T>(amount?: number): Operator<T, T>
```

### Arguments

- `amount`: `number` - The amount of items to include. Defaults to `1`.

### Example

```ts
const result = query(
  from([1, 2, 3, 4]),
  takeLast(2)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
3
4
```

## TakeWhile

Creates an `Operator` that yields the items of the source `Iterable` while the provided function returns true for each item. If the condition returns false for an item, that item and the items after that will be omitted from the result.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function takeWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T>
```

### Arguments

- `predicate`: `(item: T, index: number) => boolean` - A function that decides if an item should be yielded

### Example

```ts
const result = query(
  from([1, 2, 3, 2, 5, 1]),
  takeWhile(item => item < 3)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
```

## Tap

Creates an `Operator` that executes the provided function for each item of the source `Iterable`. Great for debugging intermediate results of complex queries.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function tap<T>(
  action: (element: T, index: number) => void
): Operator<T, T>
```

### Arguments

- `action`: `(element: T, index: number) => void` - A function that gets executed when an element is yielded

### Example

```ts
const result = query(
  from([1, 2, 3]),
  tap((item, index) => console.log({item, index}))
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
{ item: 1, index: 0 }
1
{ item: 2, index: 1 }
2
{ item: 3, index: 2 }
3
```

## Union

Creates an `Operator` that calculates the set union of the source sequence and the target sequence. If an item is present in either of the sequences it will be included in the result. The result contains only distinct items.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function union<T>(
  items: Iterable<T>,
  equalityCheck?: EqualityCheck<T>
): Operator<T, T>
```

### Arguments

- `items`: `Iterable<T>` - The items to calculate the union of the source with
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if two items in the union result are considered equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 3, 4, 5]),
  union([2, 4, 6, 8])
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
3
4
5
6
8
```

## Where

Creates an `Operator` that filters the items that satisfy the provided condition.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function where<T>(
  predicate: (element: T, index: number) => boolean
): Operator<T, T>
```

### Arguments

- `predicate`: `(element: T, index: number) => boolean` - A function that checks if an item should be included in the result

### Example

```ts
const result = query(
  from([1, 2, 3, 4]),
  where(item => item % 2 === 0)
)

for (const item of result) {
  console.log(item)
}
```

### Output

```ts
2
4
```

## Without

Creates an `Operator` that omits the provided elements from the source `Iterable`.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function without<T>(
  other: Iterable<T>,
  equalityCheck?: EqualityCheck<T>
): Operator<T, T>
```

### Arguments

- `other`: `Iterable<T>` - An `Iterable` that contains the items to omit from the source
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if an item in the source and an item in the provided `Iterable` are considered equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 3, 4, 5]),
  without([3, 5])
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
4
```

## Zip

Creates an `Operator` that merges the source and the provided `Iterable` into a single `Iterable`. If the source and the provided `Iterable` have different length, the result will have the length of the shorter one.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function zip<T, O>(other: Iterable<O>): Operator<T, [T, O]>
```

### Arguments

- `other`: `Iterable<O>` - The `Iterable` to merge the source with

### Example

```ts
const result = query(
  from([1, 2, 3]),
  zip(['one', 'two'])
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
[1, 'one']
[2, 'two']
```
