import { useSyncExternalStore } from "react"
import { type NoteId } from "@/features/notes/slice"
import type Session from "@/collab/session"
import type SessionListener from "@/collab/listener"
import CollabManager from "@/collab/manager"

export function useNoteTitleById(id: NoteId) {
  let callback: Function | undefined
  let session: Session | undefined = CollabManager.getOpenSession(id)
  let listener: SessionListener = {
    onMetadataModified: _ => {
      if (callback) {
        callback()
      }
    },
  }

  function subscribe(cb: Function) {
    callback = cb
    if (session) {
      session.addListener(listener)
    }
    return () => {
      if (session) {
        session.removeListener(listener)
      }
    }
  }

  function getSnapshot() {
    return session?.getTitle()
  }

  return useSyncExternalStore(subscribe, getSnapshot)
}
