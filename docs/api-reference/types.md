---
layout: doc
prev: false
next: false
---

# Types

The library defines some builtin types. They are useful to know if you want to extend the library with your custom operators.

## Starter

Starter is used to create an iterable. A query must start with a starter operator. It is a function that has no arguments and returns an `Iterable`. It cannot have any arguments, since the query function cannot know what arguments it should have.

```ts
type Starter<T> = () => Iterable<T>
```

## Operator

A function that receives an `Iterable` and returns another `Iterable`. Can be used to transform the source `Iterable` by any custom logic.

```ts
type Operator<T, R> = (source: Iterable<T>) => Iterable<R>
```

## Finisher

A `Finisher` is a special type of `Operator`, that does not transform the source `Iterable` into another one, but rather transforms it into a single value. A finisher can only be the last operator of a query, no other operators or finishers can follow them.

```ts
type Finisher<T, R> = (source: Iterable<T>) => R
```

## Utility types for operators

### EqualityCheck

It means a function, that receives two things, and decides whether they are considered equal. Can be used in some builtin operators and finishers to customize their behavior.

```ts
type EqualityCheck<T> = (left: T, right: T) => boolean
```

### Comparator

A function that receives two things, and decides whether one is greater, less, or equal to the other. Can be used in some builtin operators and finishers to customize their behavior.

```ts
type Comparator<T> = (left: T, right: T) => number
```

> **_NOTE:_** A comparator implementation should return a negative number if the left argument is considered less than the right. It should return 0, if the two arguments are considered equal. It should return a positive number if the left argument is considered greater than the right.
