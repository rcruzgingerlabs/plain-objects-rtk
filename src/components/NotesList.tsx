import { useAppSelector } from "@/app/hooks"
import NoteListItem from "@/components/NoteListItem"
import { type RootState } from "@/app/store"

export default function NotesList() {
  const ids = useAppSelector((s: RootState) => s.notes.ids)

  return (
    <div>
      {ids.map(id => (
        <NoteListItem key={id} id={id} />
      ))}
    </div>
  )
}
