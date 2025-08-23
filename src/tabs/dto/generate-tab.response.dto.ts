import { FretBoard } from 'src/instruments/fretBoards/fretBoard';
export interface GenerateTabResponseDto {
  fretBoard: FretBoard;
  tabToString: string;
}
