import { Finisher, Operator, Starter } from './types'

/**
 * Executes a chain of query operators.
 * @param op The starting operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T>(op: Starter<T>): Iterable<T>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R>(op1: Starter<T>, op2: Finisher<T, R>): R

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R>(op1: Starter<T>, op2: Operator<T, R>): Iterable<R>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Finisher<R1, R2>
): R2

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>
): Iterable<R2>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Finisher<R2, R3>
): R3

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>
): Iterable<R3>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Finisher<R3, R4>
): R4

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>
): Iterable<R4>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Finisher<R4, R5>
): R5

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>
): Iterable<R5>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Finisher<R5, R6>
): R6

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>
): Iterable<R6>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Finisher<R6, R7>
): R7

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>
): Iterable<R7>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Finisher<R7, R8>
): R8

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>
): Iterable<R8>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Finisher<R8, R9>
): R9

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>
): Iterable<R9>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Finisher<R9, R10>
): R10

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>
): Iterable<R10>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Finisher<R10, R11>
): R11

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>
): Iterable<R11>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Finisher<R11, R12>
): R12

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>
): Iterable<R12>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Finisher<R12, R13>
): R13

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Operator<R12, R13>
): Iterable<R13>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 An operation
 * @param op15 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Operator<R12, R13>,
  op15: Finisher<R13, R14>
): R14

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 An operation
 * @param op15 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Operator<R12, R13>,
  op15: Operator<R13, R14>
): Iterable<R14>

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 An operation
 * @param op15 An operation
 * @param op16 The finishing operation
 * @returns The result of the finishing operator
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14,
  R15
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Operator<R12, R13>,
  op15: Operator<R13, R14>,
  op16: Finisher<R14, R15>
): R15

/**
 * Executes a chain of query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @param op8 An operation
 * @param op9 An operation
 * @param op10 An operation
 * @param op11 An operation
 * @param op12 An operation
 * @param op13 An operation
 * @param op14 An operation
 * @param op15 An operation
 * @param op16 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function query<
  T,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14,
  R15
>(
  op1: Starter<T>,
  op2: Operator<T, R1>,
  op3: Operator<R1, R2>,
  op4: Operator<R2, R3>,
  op5: Operator<R3, R4>,
  op6: Operator<R4, R5>,
  op7: Operator<R5, R6>,
  op8: Operator<R6, R7>,
  op9: Operator<R7, R8>,
  op10: Operator<R8, R9>,
  op11: Operator<R9, R10>,
  op12: Operator<R10, R11>,
  op13: Operator<R11, R12>,
  op14: Operator<R12, R13>,
  op15: Operator<R13, R14>,
  op16: Operator<R14, R15>
): Iterable<R15>

/**
 * Executes a chain of query operators.
 * @param starter The starting operation
 * @param ops The operations
 * @returns An `Iterable` that can be used to iterate over the results
 * if the last operator is not a `Finisher`. Otherwise it returns the result of
 * that operator.
 */
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
