import { type Middleware, type UnknownAction } from "@reduxjs/toolkit"
import { type RootState } from "@/app/store"
import type SessionListener from "@/collab/listener"
import {
  triggerNoteEntityUpdate,
  type CreateNoteAction,
} from "@/features/notes/slice"

function isAction(action: any): action is UnknownAction {
  return "type" in action
}

function isCreateNoteAction(action: UnknownAction): action is CreateNoteAction {
  return action.type === "notes/createNote"
}

export const notesMiddleware: Middleware<{}, RootState> =
  store => next => async (action: unknown) => {
    if (isAction(action) && isCreateNoteAction(action)) {
      let listener: SessionListener = {
        // NOTE: Need to add listeners based on the updates we care about
        onMetadataModified: session => {
          store.dispatch(triggerNoteEntityUpdate(session.getId()))
        },
      }
      action.payload.addListener(listener)
    }
    return next(action)
  }
