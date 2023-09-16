import { Comparator } from '../types'

export class QuickSorter<T, P> {
  constructor(
    private selector: (item: T) => P,
    private comparator: Comparator<P>
  ) {}

  sort(array: T[]) {
    this.quickSort(array, 0, array.length - 1)
  }

  private quickSort(array: T[], start: number, end: number) {
    if (start < end) {
      const partitionIndex = this.partition(array, start, end)
      this.quickSort(array, start, partitionIndex - 1)
      this.quickSort(array, partitionIndex + 1, end)
    }
  }

  private partition(array: T[], start: number, end: number): number {
    const pivot = this.selector(array[end])
    let i = start - 1
    for (let j = start; j < end; j++) {
      if (this.comparator(this.selector(array[j]), pivot) < 0) {
        i++
        this.swap(array, i, j)
      }
    }

    i++
    if (
      this.comparator(this.selector(array[end]), this.selector(array[i])) < 0
    ) {
      this.swap(array, i, end)
    }

    return i
  }

  private swap(array: T[], i: number, j: number) {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
  }
}
