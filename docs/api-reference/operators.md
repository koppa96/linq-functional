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

Creates an `Operator` that yields all the items from the source sequence, then yields the items passed as argument.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

### Overload #1

```ts
function append<T>(items: Iterable<T>): Operator<T, T>
```

#### Arguments

- `items`: `Iterable<T>` - The items to yield after all items of the source sequence were yielded

#### Example

```ts
const result = query(from([1, 2]), append([3, 4]))

for (const item of result) {
  console.log(item)
}
```

#### Output

```text
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

- `item`: `T` - The first item to yield after all items of the source sequence were yielded
- `...rest`: `T[]` - The items to yield after the first item was yielded

#### Example

```ts
const result = query(from([1, 2]), append(3, 4))

for (const item of result) {
  console.log(item)
}
```

#### Output

```text
1
2
3
4
```

## Cast

Simply casts the source `Iterable` to the desired type. **Does no type checking.** This operator is only supposed to be used if you - for some reason - know that the contents of the source sequence will only contain a specific type of items. For other scenarios [ofType](/api-reference/operators.html#oftype) is recommended.

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

```text
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

```text
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

Creates an `Operator` that produces the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of the source sequence and the provided sequence.

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

```text
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

Creates an `Operator` that filters out the duplicated items from the source sequence.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function distinct<T>(equalityCheck?: EqualityCheck<T>): Operator<T, T>
```

### Arguments

- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if two items of the source sequence are considered equal. Defaults to the `===` operator.

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

Creates an `Operator` that filters out the items from the source sequence which are considered duplicate by the provided selector's value.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function distinctBy<T, R>(
  selector: (item: T) => R,
  equalityCheck?: EqualityCheck<R>
): Operator<T, T>
```

### Argument

- `selector`: `(item: T) => R` - A function that selects a value for each item. This value is used to check if the item is distinct.
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if two items of the source sequence are considered equal. Defaults to the `===` operator.

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

```text
{ id: 1, name: 'John' }
{ id: 2, name: 'Jane' }
```

## GroupBy

Creates an `Operator` that groups the items of the source sequence by the values selected by the provided selector.

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

```text
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

```text
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

```text
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

```text
1
2
3
4
5
```

## Intersect

Creates an `Operator` that calculates the set intersection of the source sequence and the target sequence. If an item is present in both of the sequences it will be included in the result. Duplicated items will only be included once.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function intersect<T>(items: Iterable<T>, equalityCheck?: EqualityCheck<T>): Operator<T, T>
```

### Arguments

- `items`: `Iterable<T>` - The items to intersect the source sequence with
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if an item in the source sequence and an item in the intersected sequence are considered equal. Defaults to the `===` operator.

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

```text
2
4
```

## LeftJoin

Creates an `Operator` that performs an operation like SQL's left join of database tables. If the join condition does not evaluate true for an item of the source sequence, the item will be emitted with a `null` joined to it.

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

```text
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

```text
2
4
```
