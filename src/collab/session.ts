import { type NoteId } from "@/features/notes/slice"
import type SessionListener from "@/collab/listener"

class Session {
  private _title: string
  private _id: NoteId
  private _listeners: Set<SessionListener>

  constructor(id: NoteId, title: string) {
    this._title = title
    this._id = id
    this._listeners = new Set()
  }

  public addListener(listener: SessionListener) {
    this._listeners.add(listener)
  }

  public removeListener(listener: SessionListener) {
    this._listeners.delete(listener)
  }

  public getId(): string {
    return this._id
  }

  public getTitle(): string {
    return this._title
  }

  public setTitle(title: string): void {
    if (title !== this._title) {
      this._title = title
      this._listeners.forEach(l => l.onMetadataModified(this))
    }
  }
}

export default Session
