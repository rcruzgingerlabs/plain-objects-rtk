export default class Counter {
  private _value: number = 0
  increment(inc: number | undefined) {
    this._value += inc ?? 1
  }
  getValue(): number {
    return this._value
  }

  get getterValue(): number {
    return this._value
  }
}
