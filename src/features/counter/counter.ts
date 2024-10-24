export default class Counter {
  value: number = 0
  increment(inc: number | undefined) {
    this.value += inc ?? 1
  }
  getValue(): number {
    return this.value
  }
}
