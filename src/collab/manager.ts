import type Session from "@/collab/session"

class Manager {
  private _sessions: Map<string, Session>
  constructor() {
    this._sessions = new Map()
  }
}

const manager = new Manager()
export default manager
