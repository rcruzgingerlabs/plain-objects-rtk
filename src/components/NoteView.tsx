// import { useDispatch } from "@/app/store"
import { useSelector } from "@/app/store"
import { selectActiveNote } from "@/features/notes/selectors"
import "./NoteView.css"

export default function NoteView() {
  // const dispatch = useDispatch()
  const note = useSelector(selectActiveNote)

  if (!note) {
    return null
  }

  return (
    <main className="noteview">
      <div className="notetitle">{note.session?.getTitle()}</div>
    </main>
  )
}
