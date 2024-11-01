import { createFakeTitle } from "@/utils/fake-title"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { type RootState } from "@/app/store"
import {
  setActiveNote,
  updateNoteTitle,
  type NoteId,
} from "@/features/notes/slice"
import "./NoteListItem.css"

type NoteListItemProps = {
  id: NoteId
}

export default function NoteListItem({ id }: NoteListItemProps) {
  const dispatch = useAppDispatch()
  const noteTitle = useAppSelector((s: RootState) =>
    s.notes.entities[id].session?.getTitle(),
  )
  return (
    <li className="notelistitem">
      <button onClick={() => dispatch(setActiveNote(id))}>{noteTitle}</button>
      <button
        onClick={() => {
          dispatch(
            updateNoteTitle({
              id,
              title: createFakeTitle(4),
            }),
          )
        }}
      >
        Update Note Title
      </button>
    </li>
  )
}
