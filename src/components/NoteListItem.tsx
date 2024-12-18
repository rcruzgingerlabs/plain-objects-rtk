import { createFakeTitle } from "@/utils/fake-title"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { type RootState } from "@/app/store"
import { selectNoteEntityById } from "@/features/notes/selectors"
import { setActiveNote, type NoteId } from "@/features/notes/slice"
import "./NoteListItem.css"

type NoteListItemProps = {
  id: NoteId
}

export default function NoteListItem({ id }: NoteListItemProps) {
  const dispatch = useAppDispatch()
  const noteTitle = useAppSelector((s: RootState) =>
    s.notes.entities[id].session?.getTitle(),
  )
  const entity = useAppSelector((s: RootState) => selectNoteEntityById(s, id))
  return (
    <li className="notelistitem">
      <button onClick={() => dispatch(setActiveNote(id))}>{noteTitle}</button>
      <button onClick={() => entity?.session?.setTitle(createFakeTitle(2))}>
        Update Note Title
      </button>
    </li>
  )
}
