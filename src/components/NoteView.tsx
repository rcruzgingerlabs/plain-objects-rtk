import { useAppSelector } from "@/app/hooks"
import { type RootState } from "@/app/store"
import { useNoteTitleById } from "@/features/notes/hooks"
import { type NoteId } from "@/features/notes/slice"
import "./NoteView.css"

type NoteTitleProps = {
  id: NoteId
}

const NoteTitle = ({ id }: NoteTitleProps) => {
  const noteTitle = useNoteTitleById(id)
  return <div className="notetitle">{noteTitle}</div>
}

export default function NoteView() {
  const activeNoteId = useAppSelector((s: RootState) => s.notes.activeNoteId)!

  if (!activeNoteId) {
    return null
  }
  return (
    <main className="noteview">
      <NoteTitle id={activeNoteId} />
    </main>
  )
}
