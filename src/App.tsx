import { useAppDispatch } from "@/app/hooks"
import { createNote } from "@/features/notes/slice"
import { createFakeTitle } from "@/utils/fake-title"
import NoteView from "@/components/NoteView"
import NotesList from "@/components/NotesList"
import CollabManager from "@/collab/manager"
import "./App.css"

const App = () => {
  const dispatch = useAppDispatch()
  const handleCreateNoteClick = () => {
    const session = CollabManager.createNewNote(createFakeTitle())
    dispatch(createNote(session))
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
