import { createSlice } from "@reduxjs/toolkit"
import type NoteSession from "@/collab/session"
import type { PayloadAction } from "@reduxjs/toolkit"

export type NoteId = string

export interface Note {
  id: NoteId
  session: NoteSession | undefined
}

export interface NotesSliceState {
  ids: NoteId[]
  entities: Record<NoteId, Note>
  activeNoteId: NoteId | undefined
}

const initialState: NotesSliceState = {
  ids: [],
  entities: {},
  activeNoteId: undefined,
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: create => ({
    createNote: create.reducer((state, action: PayloadAction<NoteSession>) => {
      const id = action.payload.getId()
      const session = action.payload
      state.ids.push(id)
      state.entities[id] = {
        id,
        session,
      }
    }),
    setActiveNote: create.reducer((state, action: PayloadAction<NoteId>) => {
      state.activeNoteId = action.payload
    }),
  }),
})

export const { createNote, setActiveNote } = notesSlice.actions
