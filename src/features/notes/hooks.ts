import { useEffect, useMemo } from "react"
import { bind } from "@react-rxjs/core"
import { createKeyedSignal } from "@react-rxjs/utils"
import { type NoteId } from "@/features/notes/slice"
import CollabManager from "@/collab/manager"
import type SessionListener from "@/collab/listener"

const [getTitleByKey$, emitNoteTitleByKey] = createKeyedSignal<NoteId, string>()

export function useNoteTitleById(id: NoteId) {
  const session = useMemo(() => CollabManager.getOpenSession(id), [id])
  const [useNoteTitle] = useMemo(
    () => bind(() => getTitleByKey$(id), session?.getTitle()),
    [id, session],
  )
  useEffect(() => {
    const listener: SessionListener = {
      onMetadataModified: session => {
        emitNoteTitleByKey(session.getId(), session.getTitle())
      },
    }
    session?.addListener(listener)

    return () => {
      session?.removeListener(listener)
    }
  }, [session])
  return useNoteTitle()
}
