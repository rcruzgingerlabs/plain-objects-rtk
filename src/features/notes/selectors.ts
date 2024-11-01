import { createSelector } from "reselect"
import { type Note, type NoteId } from "@/features/notes/slice"
import { type RootState } from "@/app/store"

export const selectNoteEntities = createSelector(
  [(s: RootState) => s.notes.entities],
  entities => Object.values(entities),
)

export const selectNoteEntityById = (
  s: RootState,
  id: NoteId,
): Note | undefined => {
  return s.notes.entities[id]
}

export const selectActiveNote = (s: RootState): Note | undefined => {
  return s.notes.activeNoteId
    ? s.notes.entities[s.notes.activeNoteId]
    : undefined
}
