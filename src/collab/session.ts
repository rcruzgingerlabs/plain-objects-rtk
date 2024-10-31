import type Listener from "@/collab/listener"

class Session {
  private _title: string
  private _listeners: Set<Listener>

  constructor() {
    this._title = "lorem ipsum dolor"
    this._listeners = new Set()
  }

  addListener(listener: Listener): void {
    this._listeners.add(listener)
  }

  removeListener(listener: Listener): void {
    this._listeners.delete(listener)
  }
}

export default Session
