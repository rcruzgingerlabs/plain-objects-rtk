import { useDispatch, useSelector } from "@/app/store"
import { selectNoteEntities } from "@/features/notes/selectors"
import { setActiveNote } from "@/features/notes/slice"

export default function NotesList() {
  const dispatch = useDispatch()
  const notes = useSelector(selectNoteEntities)

  return (
    <div>
      {notes.map(note => (
        <li key={note.id}>
          <button onClick={() => dispatch(setActiveNote(note.id))}>
            {note.session?.getTitle()}
          </button>
        </li>
      ))}
    </div>
  )
}
