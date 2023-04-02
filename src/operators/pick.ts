import { Operator } from '../types'

export function pick<T, K extends keyof T>(key: K): Operator<T, T[K]>
export function pick<T, K1 extends keyof T, K2 extends keyof Omit<T, K1>>(
  key1: K1,
  key2: K2
): Operator<T, Pick<T, K1 | K2>>
export function pick<
  T,
  K1 extends keyof T,
  K2 extends keyof Omit<T, K1>,
  K3 extends keyof Omit<T, K1 | K2>
>(key1: K1, key2: K2, key3: K3): Operator<T, Pick<T, K1 | K2 | K3>>
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
export function pick(...keys: any[]): Operator<any, any> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          const result: any = {}
          for (const key of keys) {
            result[key] = element[key]
          }
          yield result
        }
      },
    }
  }
}
