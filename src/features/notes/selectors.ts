import { type Note } from "@/features/notes/slice"
import { type RootState } from "@/app/store"

export const selectNoteEntities = (s: RootState) => s.notes.entities

export const selectActiveNote = (s: RootState): Note | undefined => {
  return s.notes.activeNoteId
    ? s.notes.entities.find(e => e.id === s.notes.activeNoteId)
    : undefined
}
