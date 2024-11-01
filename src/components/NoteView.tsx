import { useAppSelector } from "@/app/hooks"
import { selectActiveNote } from "@/features/notes/selectors"
import "./NoteView.css"

export default function NoteView() {
  const note = useAppSelector(selectActiveNote)

  if (!note) {
    return null
  }

  return (
    <main className="noteview">
      <div className="notetitle">{note.session?.getTitle()}</div>
    </main>
  )
}
