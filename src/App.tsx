import { useDispatch } from "@/app/store"
import { createNote } from "@/features/notes/slice"
import NoteView from "@/components/NoteView"
import NotesList from "@/components/NotesList"
import { v4 } from "uuid"
import "./App.css"

const App = () => {
  const dispatch = useDispatch()
  const handleCreateNoteClick = () => {
    dispatch(
      createNote({
        id: v4(),
        title: `lorem ipsum - ${Date.now()}`,
      }),
    )
  }

  return (
    <div className="app">
      <div className="library">
        <div className="actions">
          <button onClick={handleCreateNoteClick}>Create note</button>
        </div>
        <NotesList />
      </div>
      <NoteView />
    </div>
  )
}

export default App
