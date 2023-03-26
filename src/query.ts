import { Finisher, Operator, Starter } from './types'

export function query<T>(op: Starter<T>): Iterable<T>
export function query<T, R>(op1: Starter<T>, op2: Finisher<T, R>): R
export function query<T, R>(op1: Starter<T>, op2: Operator<T, R>): Iterable<R>
export function query<T, R1, R2>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Finisher<R1, R2>
): R2
export function query<T, R1, R2>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>
): Iterable<R2>
export function query(
  starter: Starter<any>,
  ...ops: Operator<any, any>[]
): any {
  let final = starter()
  for (const op of ops) {
    final = op(final)
  }
  return final
}
