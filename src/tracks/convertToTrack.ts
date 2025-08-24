import { PlayedNoteDto } from "src/notes/playedNote/dto/played-note.dto";
import { TrackFromMelodyDto } from "./dto/track-from-melody.dto";
import { convertToPlayedNotes } from "src/notes/playedNote/convertDtoToPlayedNotes";
import PlayedNote from "src/notes/playedNote/PlayedNoteOne";
import { TrackOne } from "src/notes/TrackOne";

export function convertToTrack(playedNotesDto: PlayedNoteDto[], beatPerMinute: number) {
  const playedNotes: PlayedNote[] = convertToPlayedNotes(playedNotesDto);
  const track = new TrackOne(playedNotes, beatPerMinute);
  return track;
}