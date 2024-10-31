import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type NoteId = string

class NoteSession {
  private _title: string

  constructor() {
    this._title = ""
  }

  public getTitle(): string {
    return this._title
  }

  public setTitle(title: string): void {
    this._title = title
  }
}

export interface Note {
  id: NoteId
  session: NoteSession | undefined
}

export interface NotesSliceState {
  ids: NoteId[]
  entities: Note[]
  activeNoteId: NoteId | undefined
}

const initialState: NotesSliceState = {
  ids: [],
  entities: [],
  activeNoteId: undefined,
}

export type CreateNotePayload = {
  id: NoteId
  title: string
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: create => ({
    createNote: create.reducer(
      (state, action: PayloadAction<CreateNotePayload>) => {
        state.ids.push(action.payload.id)
        const session = new NoteSession()
        session.setTitle(action.payload.title)
        state.entities.push({
          id: action.payload.id,
          session,
        })
      },
    ),
    setActiveNote: create.reducer((state, action: PayloadAction<NoteId>) => {
      state.activeNoteId = action.payload
    }),
  }),
})

export const { createNote, setActiveNote } = notesSlice.actions
