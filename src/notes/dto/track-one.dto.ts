import { PlayedNoteDto } from '../playedNote/dto/played-note.dto';

export interface TrackOneDto {
  playedNotes: PlayedNoteDto[];
  beatPerMinute: number;
}
