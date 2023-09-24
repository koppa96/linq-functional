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
