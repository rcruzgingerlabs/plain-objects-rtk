import { useAppSelector } from "@/app/hooks"
import { type RootState } from "@/app/store"
import "./NoteView.css"

export default function NoteView() {
  const activeNoteId = useAppSelector((s: RootState) => s.notes.activeNoteId)!
  const noteTitle = useAppSelector((s: RootState) =>
    activeNoteId
      ? s.notes.entities[activeNoteId].session?.getTitle()
      : undefined,
  )
  if (!activeNoteId) {
    return null
  }

  return (
    <main className="noteview">
      <div className="notetitle">{noteTitle}</div>
    </main>
  )
}
