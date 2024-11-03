import { useAppSelector } from "@/app/hooks"
import { useNoteTitleById } from "@/features/notes/hooks"
import { type RootState } from "@/app/store"
import "./NoteView.css"

export default function NoteView() {
  const activeNoteId = useAppSelector((s: RootState) => s.notes.activeNoteId)!
  const noteTitle = useNoteTitleById(activeNoteId)
  if (!activeNoteId) {
    return null
  }
  return (
    <main className="noteview">
      <div className="notetitle">{noteTitle}</div>
    </main>
  )
}
