import { createFakeTitle } from "@/utils/fake-title"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { type RootState } from "@/app/store"
import { useNoteTitleById } from "@/features/notes/hooks"
import { setActiveNote, type NoteId } from "@/features/notes/slice"
import "./NoteListItem.css"

type NoteListItemProps = {
  id: NoteId
}

export default function NoteListItem({ id }: NoteListItemProps) {
  const dispatch = useAppDispatch()
  const noteTitle = useNoteTitleById(id)
  const session = useAppSelector((s: RootState) => s.notes.entities[id].session)
  return (
    <li className="notelistitem">
      <button onClick={() => dispatch(setActiveNote(id))}>{noteTitle}</button>
      <button
        onClick={() => {
          session?.setTitle(createFakeTitle(2))
        }}
      >
        Update Note Title
      </button>
    </li>
  )
}
