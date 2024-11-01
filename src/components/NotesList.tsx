import { useAppSelector } from "@/app/hooks"
import { selectNoteEntities } from "@/features/notes/selectors"
import NoteListItem from "@/components/NoteListItem"

export default function NotesList() {
  const notes = useAppSelector(selectNoteEntities)

  return (
    <div>
      {notes.map(note => (
        <NoteListItem key={note.id} id={note.id} />
      ))}
    </div>
  )
}
