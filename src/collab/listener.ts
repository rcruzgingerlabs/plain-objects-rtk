import type Session from "@/collab/session"

export default interface SessionListener {
  onMetadataModified(session: Session): void
}
