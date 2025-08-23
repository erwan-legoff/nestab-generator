import NoteOne from "../NoteOne";
import { PlayedNoteDto } from "./dto/played-note.dto";
import PlayedNote from "./PlayedNoteOne";

export function convertToPlayedNotes(playedNotesDto: PlayedNoteDto[]): PlayedNote[] {
  return playedNotesDto.map((playedNote) => new PlayedNote(new NoteOne(playedNote.note.midi)));
}