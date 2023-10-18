export type AsyncStarter<T> = () => AsyncIterable<T>
export type AsyncOperator<T, R> = (source: AsyncIterable<T>) => AsyncIterable<R>
export type AsyncFinisher<T, R> = (source: AsyncIterable<T>) => Promise<R>
