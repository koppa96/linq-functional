---
layout: doc
prev:
  text: Operators
  link: /api-reference/operators
next: false
---

# Finishers

[Finisher](/api-reference/types.html#finisher) is a function that receives an `Iterable` as an argument, and returns a single value, terminating a query.

## Aggregate

Creates a `Finisher` that calculates a single aggregated value by applying the accumulator function to each item of the source `Iterable`.

```ts
function aggregate<T, R>(
  seed: R,
  accumulator: (result: R, item: T) => R
): Finisher<T, R>
```

### Arguments

- `seed`: `R` - The initial value of the aggregation
- `accumulator`: `(result: R, item: T) => R` - A function that computes the aggregated value by the previous aggregated value and the current item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  aggregate(0, (result, item) => result + item)
)

console.log(result)
```

### Output

```txt
6
```

## All

Creates a `Finisher` that checks whether all items of the source `Iterable` satisfy the given predicate. Returns `true` if the source is empty.

```ts
function all<T>(predicate: (item: T) => boolean): Finisher<T, boolean>
```

### Arguments

- `predicate`: `(item: T) => boolean` - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  all(item => item < 2)
)

console.log(result)
```

### Output

```txt
false
```

## Any

Creates a `Finisher` that checks if any item of the source `Iterable` satisfies the given predicate. If there is no predicate given, the operator will simply check if the source is empty.

```ts
function any<T>(predicate?: (item: T) => boolean): Finisher<T, boolean>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  any(item => item < 2)
)

console.log(result)
```

### Output

```txt
true
```

## Average

Creates a `Finisher` that calculates the average of items of an `Iterable<number>` source.

```ts
function average(): Finisher<number, number>
```

### Example

```ts
const result = query(
  from([1, 2, 3]),
  average()
)

console.log(result)
```

### Output

```txt
2
```

## AverageOf

Creates a `Finisher` that calculates the average of the values mapped from the source `Iterable` by the given selector.

```ts
function averageOf<T>(
  selector: (item: T) => number
): Finisher<T, number>
```

### Arguments

- `selector`: `(item: T) => number` - A function that transforms an item to a number that will be used for calculating the average

### Example

```ts
const people = [
  {
    name: "John",
    age: 25
  },
  {
    name: "Jane",
    age: 20
  },
]

const result = query(
  from(people),
  averageOf(person => person.age)
)

console.log(result)
```

### Output

```txt
22.5
```

## Contains

Creates a `Finisher` that checks if the source `Iterable` contains an item that is equal to the provided value.

```ts
function contains<T>(
  item: T,
  equalityCheck?: EqualityCheck<T>
): Finisher<T, boolean>
```

### Arguments

- `item`: `T` - The item to check if the source contains
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if an item of the source and the provided item are equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 3]),
  contains(3)
)

console.log(result)
```

### Output

```txt
true
```

## Count

Creates a `Finisher` that determines how many items in the source `Iterable` satisfy the given predicate. If there is no predicate given, the operator will simply return the number of total items in the source.

```ts
function count<T>(
  predicate?: (item: T) => boolean
): Finisher<T, number>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item if it should be counted

### Example

```ts
const result = query(
  from([1, 2, 3]),
  count(value => value < 3)
)

console.log(result)
```

### Output

```txt
2
```

## ElementAt

Creates a `Finisher` that returns the item at the specified index of the source `Iterable`.

```ts
function elementAt<T>(index: number): Finisher<T, T>
```

### Arguments

- `index`: `number` - The zero based index of the desired item

### Example

```ts
const result = query(
  from(["apple", "banana", "lemon"]),
  elementAt(2)
)

console.log(result)
```

### Output

```txt
lemon
```

## First

Creates a `Finisher` that returns the first item that matches the given predicate. If no predicate is specified, it simply returns the first item of the source `Iterable`. Throws an error if there were no matching items in the source.

```ts
function first<T>(predicate?: (item: T) => boolean): Finisher<T, T>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from(['apple', 'banana', 'lemon']),
  first()
)

console.log(result)
```

### Output

```txt
apple
```

## FirstOrNull

Creates a `Finisher` that returns the first item that matches the given predicate. If no predicate is specified, it simply returns the first item of the source `Iterable`. If the source is empty or has no elements that match the predicate, `null` is returned.

```ts
function firstOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  firstOrNull(value => value > 1)
)
```

### Output

```txt
2
```

## Join

Creates a `Finisher` that joins the items of the source `Iterable<string>` into a single string, where the items are separated by the given separator.

```ts
function join(separator?: string): Finisher<string, string>
```

### Arguments

- `separator`: `string` (optional) - A string that will be used to separate the items of the source. If omitted, a comma will be used.

### Example

```ts
const result = query(
  from(['apple', 'banana', 'lemon']),
  join(', ')
)

console.log(result)
```

### Output

```txt
apple, banana, lemon
```

## Last

Creates a `Finisher` that returns the last element that matches the given predicate. If no predicate is specified it simply returns the last element of the source `Iterable`. Throws an error if the source is empty or no elements match the predicate.

```ts
function last<T>(predicate?: (item: T) => boolean): Finisher<T, T>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  last(value => value < 3)
)

console.log(result)
```

### Output

```txt
2
```

## LastOrNull

Creates a `Finisher` that returns the last element that matches the given predicate. If no predicate is specified it simply returns the last element of the source `Iterable`. If the source is empty or has no elements that match the predicate, `null` is returned.

```ts
function lastOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  lastOrNull(value => value < 1)
)

console.log(result)
```

### Output

```txt
null
```

## Max

Creates a `Finisher` that returns the greatest element of the source `Iterable`.

```ts
function max<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null>
```

### Arguments

- `comparator`: `Comparator<R>` - An optional function that compares two values of the source. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const result = query(
  from([3, 5, 6, 2]),
  max()
)

console.log(result)
```

### Output

```txt
6
```

## MaxBy

Creates a `Finisher` that returns the element that has the greatest value selected by the given selector.

```ts
function maxBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null>
```

### Arguments

- `selector`: `(item: T) => R` - A function that transforms an item to a value that can be used to compare the items by.
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 20
  },
]

const result = query(
  from(people),
  maxBy(person => person.age)
)

console.log(result)
```

### Output

```txt
{ name: 'John', age: 25 }
```

## MaxOf

Creates a `Finisher` that returns the greatest value selected by the given selector.

```ts
function maxOf<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, R | null>
```

### Arguments

- `selector`: `(item: T) => R` - A function that transforms an item to a value that will be compared.
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 20
  },
]

const result = query(
  from(people),
  maxOf(person => person.age)
)

console.log(result)
```

### Output

```txt
25
```

## Min

Creates a `Finisher` that returns the smallest element of the source `Iterable`.

```ts
function min<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null>
```

### Arguments

- `comparator`: `Comparator<R>` - An optional function that compares two values of the source. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const result = query(
  from([3, 5, 6, 2]),
  min()
)

console.log(result)
```

### Output

```txt
2
```

## MinBy

Creates a `Finisher` that returns the item that has the smallest value selected by the given selector.

```ts
function minBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null>
```

### Arguments

- `selector`: `(item: T) => R` - A function that transforms an item to a value that can be used to compare the items by.
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 20
  },
]

const result = query(
  from(people),
  minBy(person => person.age)
)

console.log(result)
```

### Output

```txt
{ name: 'Jane', age: 20 }
```

## MinOf

Creates a `Finisher` that returns the smallest value selected by the given selector.

```ts
function minOf<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, R | null>
```

### Arguments

- `selector`: `(item: T) => R` - A function that transforms an item to a value that will be compared.
- `comparator`: `Comparator<R>` - An optional function that compares the selected values. Defaults to a function that returns `-1` if `left < right`, `0` if `left === right`, `1` otherwise. For more details see [Comparator](/api-reference/types.html#comparator).

### Example

```ts
const people = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 20
  },
]

const result = query(
  from(people),
  minOf(person => person.age)
)

console.log(result)
```

### Output

```txt
20
```

## SequenceEquals

Creates a `Finisher` that checks if the given `Iterable` has the same items as the source `Iterable`.

```ts
function sequenceEquals<T>(
  other: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean>
```

### Arguments

- `other`: `Iterable<T>` - The other `Iterable` to compare the source with
- `equalityCheck`: `EqualityCheck<T>` (optional) - A function that can determine if an item of the source and an item of the other is considered equal. Defaults to the `===` operator.

### Example

```ts
const result = query(
  from([1, 2, 3]),
  sequenceEquals([1, 2, 3])
)

console.log(result)
```

### Output

```txt
true
```

## Single

Creates a `Finisher` that returns the only item that matches the given predicate. If no predicate is specified it simply returns the only item of the source `Iterable`. If there are multiple items in the source and no predicate is given, or there are multiple items that match the predicate, an error is thrown. The function also throws an error if the source is empty or has no matching item.

```ts
function single<T>(predicate?: (item: T) => boolean): Finisher<T, T>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  single(value => value > 2)
)

console.log(result)
```

### Output

```txt
3
```

## SingleOrNull

Creates a `Finisher` that returns the only item that matches the given predicate. If no predicate is specified it simply returns the only item of the source `Iterable`. If there are multiple items in the source and no predicate is given, or there are multiple items that match the predicate, an error is thrown. If the source is empty or has no matching items to the predicate, it returns `null`.

```ts
function singleOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null>
```

### Arguments

- `predicate`: `(item: T) => boolean` (optional) - A function that tests an item

### Example

```ts
const result = query(
  from([1, 2, 3]),
  singleOrNull(value => value > 2)
)

console.log(result)
```

### Output

```txt
3
```

## Sum

Creates a `Finisher` that calculates the sum of items in the source `Iterable<number>`.

```ts
function sum(): Finisher<number, number>
```

### Example

```ts
const result = query(
  from([1, 2, 3]),
  sum()
)

console.log(result)
```

### Output

```txt
6
```

## SumOf

Creates a `Finisher` that calculates the sum of the values mapped from the source sequence by the given selector.

```ts
function sumOf<T>(selector: (item: T) => number): Finisher<T, number>
```

### Arguments

- `selector`: `(item: T) => number` - A function that transforms an item to a number that will be used to calculate the sum

### Example

```ts
const people = [
  {
    name: "John",
    dogs: 2
  },
  {
    name: "Jane",
    dogs: 1
  },
]

const result = query(
  from(people),
  sumOf(person => person.dogs)
)

console.log(result)
```

### Output

```txt
3
```

## ToArray

Creates a `Finisher` that collects the items of the source `Iterable` into an array. It can be used to materialize / get a snapshot of the result of a query.

```ts
function toArray<T>(): Finisher<T, T[]>
```

### Example

```ts
const result = query(
  from([1, 2, 3]),
  select(value => valuevalue),
  toArray()
)

console.log(result)
```

### Output

```txt
[1, 4, 9]
```

## ToMap

Creates a `Finisher` that collects the items of the source `Iterable` into a map where the keys for each element are selected by the given key selector.

### Overload #1

```ts
function toMap<T, K>(keySelector: (item: T) => K): Finisher<T, Map<K, T>>
```

#### Arguments

- `keySelector`: `(item: T) => K` - A function that determines what key will belong to an item in the resulting map

#### Example

```ts
const people = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 20
  },
]

const result = query(
  from(people),
  toMap(person => person.name)
)

for (const [key, value] of result) {
  console.log([key, value])
}
```

#### Output

```txt
['John', { name: 'John', age: 25 }]
['Jane', { name: 'Jane', age: 20 }]
```

### Overload #2

Values are selected by a given value selector.

```ts
function toMap<T, K, V>(
  keySelector: (item: T) => K,
  valueSelector: (item: T) => V
): Finisher<T, Map<K, V>>
```

#### Arguments

- `keySelector`: `(item: T) => K` - A function that determines what key will belong to an item in the resulting map
- `valueSelector`: `(item: T) => V` - A function that transforms an item from the source `Iterable` to an item in the resulting map

#### Example

```ts
const people = [
  {
    name: "John",
    age: 25
  },
  {
    name: "Jane",
    age: 20
  },
]

const result = query(
  from(people),
  toMap(person => person.name, person => person.age)
)

for (const [key, value] of result) {
  console.log([key, value])
}
```

#### Output

```txt
['John', 25]
['Jane', 20]
```

## ToSet

Creates a `Finisher` that collects the items of the source `Iterable` and returns it as a `Set`.

```ts
function toSet<T>(): Finisher<T, Set<T>>
```

### Example

```ts
const result = query(
  from([1, 2, 6, 1, 4, 4]),
  toSet()
)

for (const item of result) {
  console.log(item)
}
```

### Output

```txt
1
2
6
4
```
