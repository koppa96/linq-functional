import { AsyncFinisher, AsyncOperator, AsyncStarter } from './types'
import { isPromise } from './utils/isPromise'

/**
 * Executes a chain of asynchronous query operators.
 * @param op The starting operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T>(op: AsyncStarter<T>): AsyncIterable<T>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R>(
  op1: AsyncStarter<T>,
  op2: AsyncFinisher<T, R>
): Promise<R>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R>
): AsyncIterable<R>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R1, R2>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncFinisher<R1, R2>
): Promise<R2>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R1, R2>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>
): AsyncIterable<R2>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R1, R2, R3>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncFinisher<R2, R3>
): Promise<R3>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R1, R2, R3>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>
): AsyncIterable<R3>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R1, R2, R3, R4>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncFinisher<R3, R4>
): Promise<R4>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R1, R2, R3, R4>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>
): AsyncIterable<R4>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R1, R2, R3, R4, R5>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncFinisher<R4, R5>
): Promise<R5>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R1, R2, R3, R4, R5>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>
): AsyncIterable<R5>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 The finishing operation
 * @returns The result of the finishing operator
 */
export function queryAsync<T, R1, R2, R3, R4, R5, R6>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncFinisher<R5, R6>
): Promise<R6>

/**
 * Executes a chain of asynchronous query operators.
 * @param op1 The starting operation
 * @param op2 An operation
 * @param op3 An operation
 * @param op4 An operation
 * @param op5 An operation
 * @param op6 An operation
 * @param op7 An operation
 * @returns An `Iterable` that can be used to iterate over the results
 */
export function queryAsync<T, R1, R2, R3, R4, R5, R6>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>
): AsyncIterable<R6>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncFinisher<R6, R7>
): Promise<R7>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>
): AsyncIterable<R7>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncFinisher<R7, R8>
): Promise<R8>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>
): AsyncIterable<R8>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncFinisher<R8, R9>
): Promise<R9>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>
): AsyncIterable<R9>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncFinisher<R9, R10>
): Promise<R10>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>
): AsyncIterable<R10>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncFinisher<R10, R11>
): Promise<R11>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<T, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>
): AsyncIterable<R11>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  R12
>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncFinisher<R11, R12>
): Promise<R12>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  R12
>(
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>
): AsyncIterable<R12>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncFinisher<R12, R13>
): Promise<R13>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncOperator<R12, R13>
): AsyncIterable<R13>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncOperator<R12, R13>,
  op15: AsyncFinisher<R13, R14>
): Promise<R14>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncOperator<R12, R13>,
  op15: AsyncOperator<R13, R14>
): AsyncIterable<R14>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncOperator<R12, R13>,
  op15: AsyncOperator<R13, R14>,
  op16: AsyncFinisher<R14, R15>
): Promise<R15>

/**
 * Executes a chain of asynchronous query operators.
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
export function queryAsync<
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
  op1: AsyncStarter<T>,
  op2: AsyncOperator<T, R1>,
  op3: AsyncOperator<R1, R2>,
  op4: AsyncOperator<R2, R3>,
  op5: AsyncOperator<R3, R4>,
  op6: AsyncOperator<R4, R5>,
  op7: AsyncOperator<R5, R6>,
  op8: AsyncOperator<R6, R7>,
  op9: AsyncOperator<R7, R8>,
  op10: AsyncOperator<R8, R9>,
  op11: AsyncOperator<R9, R10>,
  op12: AsyncOperator<R10, R11>,
  op13: AsyncOperator<R11, R12>,
  op14: AsyncOperator<R12, R13>,
  op15: AsyncOperator<R13, R14>,
  op16: AsyncOperator<R14, R15>
): AsyncIterable<R15>

/**
 * Executes a chain of asynchronous query operators.
 * @param starter The starting operation
 * @param ops The operations
 * @returns An `Iterable` that can be used to iterate over the results
 * if the last operator is not a `Finisher`. Otherwise it returns the result of
 * that operator.
 */
export function queryAsync(
  starter: AsyncStarter<any>,
  ...ops: Array<AsyncOperator<any, any> | AsyncFinisher<any, any>>
): any {
  let final = starter()
  for (const op of ops) {
    const result = op(final)
    if (isPromise(result)) {
      return result
    }

    final = result
  }
  return final
}
