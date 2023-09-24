import { Operator } from '../types'

/**
 * Creates an `Operator` that picks the value of the specified key from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key A key of the item of the source
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John'
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane'
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id'),
 *   toArray()
 * ) // [1, 2]
 */
export function pick<T, K extends keyof T>(key: K): Operator<T, T[K]>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<T, K1 extends keyof T, K2 extends keyof Omit<T, K1>>(
  key1: K1,
  key2: K2
): Operator<T, Pick<T, K1 | K2>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>
>(key1: K1, key2: K2, key3: K3): Operator<T, Pick<T, K1 | K2 | K3>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4
): Operator<T, Pick<T, K1 | K2 | K3 | K4>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @param key6 The sixth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>,
  K6 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5,
  key6: K6
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5 | K6>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @param key6 The sixth key to take
 * @param key7 The seventh key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>,
  K6 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5>,
  K7 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5,
  key6: K6,
  key7: K7
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5 | K6 | K7>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @param key6 The sixth key to take
 * @param key7 The seventh key to take
 * @param key8 The eighth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>,
  K6 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5>,
  K7 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6>,
  K8 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5,
  key6: K6,
  key7: K7,
  key8: K8
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @param key6 The sixth key to take
 * @param key7 The seventh key to take
 * @param key8 The eighth key to take
 * @param key9 The ninth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>,
  K6 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5>,
  K7 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6>,
  K8 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7>,
  K9 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5,
  key6: K6,
  key7: K7,
  key8: K8,
  key9: K9
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param key1 The first key to take
 * @param key2 The second key to take
 * @param key3 The third key to take
 * @param key4 The fourth key to take
 * @param key5 The fifth key to take
 * @param key6 The sixth key to take
 * @param key7 The seventh key to take
 * @param key8 The eighth key to take
 * @param key9 The ninth key to take
 * @param key10 The tenth key to take
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>,
  K4 extends keyof Omit<T, K1 | K2 | K3>,
  K5 extends keyof Omit<T, K1 | K2 | K3 | K4>,
  K6 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5>,
  K7 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6>,
  K8 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7>,
  K9 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>,
  K10 extends keyof Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9>
>(
  key1: K1,
  key2: K2,
  key3: K3,
  key4: K4,
  key5: K5,
  key6: K6,
  key7: K7,
  key8: K8,
  key9: K9,
  key10: K10
): Operator<T, Pick<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9 | K10>>

/**
 * Picks the values of the specified keys from each item.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param keys The keys to take the values of
 * @example
 * const people = [
 *   {
 *     id: 1,
 *     name: 'John',
 *     someOtherProp: 3
 *   },
 *   {
 *     id: 2,
 *     name: 'Jane',
 *     someOtherProp: 5
 *   },
 * ]
 *
 * const result = query(
 *   from(people),
 *   pick('id', 'name'),
 *   toArray()
 * ) // [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function pick(...keys: any[]): Operator<any, any> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          if (keys.length === 1) {
            yield element[keys[0]]
          } else {
            const result: any = {}
            for (const key of keys) {
              result[key] = element[key]
            }
            yield result
          }
        }
      },
    }
  }
}
