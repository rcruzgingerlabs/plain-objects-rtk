import { eventChannel, type EventChannel } from "redux-saga"
import { all, call, put, take, takeEvery } from "redux-saga/effects"
import type NoteSession from "@/collab/session"
import type SessionListener from "@/collab/listener"
import {
  createNote,
  triggerNoteEntityUpdate,
  type CreateNoteAction,
} from "@/features/notes/slice"

function createSessionChannel(session: NoteSession): EventChannel<NoteSession> {
  return eventChannel<NoteSession>(emit => {
    const listener: SessionListener = {
      onMetadataModified: _ => {
        emit(session)
      },
    }
    session.addListener(listener)
    return () => {
      session.removeListener(listener)
    }
  })
}

function* listenToSessionOnMetadataModified(action: CreateNoteAction) {
  const channel: EventChannel<NoteSession> = yield call(
    createSessionChannel,
    action.payload,
  )
  while (true) {
    const session: NoteSession = yield take(channel)
    yield put(triggerNoteEntityUpdate(session.getId()))
  }
}

function* watchCreateNote() {
  yield takeEvery(createNote.type, listenToSessionOnMetadataModified)
}

export default function* rootSaga() {
  yield all([watchCreateNote()])
}
