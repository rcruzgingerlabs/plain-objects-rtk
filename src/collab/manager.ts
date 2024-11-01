import { v4 } from "uuid"
import Session from "@/collab/session"
import { type NoteId } from "@/features/notes/slice"

class Manager {
  private _sessions: Map<string, Session>
  constructor() {
    this._sessions = new Map()
  }

  getOpenSession(noteId: NoteId): Session | undefined {
    return this._sessions.get(noteId)
  }

  createNewNote(title: string): Session {
    const session = new Session(v4(), title)
    this._sessions.set(session.getId(), session)
    return session
  }
}

const manager = new Manager()
export default manager
