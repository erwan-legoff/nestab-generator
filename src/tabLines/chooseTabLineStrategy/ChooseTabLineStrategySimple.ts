import { NoteOneInterface } from '../../notes/NoteOneInterface';
import { NoteOneSilence } from '../../notes/NoteOneSilence';
import TabLine from '../TabLine';
import { ChooseTabLineStrategy } from './ChooseTabLineStrategy';

export class ChooseTabLineStrategySimple implements ChooseTabLineStrategy {
  /**
   * This function returns the string index that is the best fit for the given TabNotes and the given TabLines given in parameters.
   * @param tabNote the tabNote you want to choose the tabLine for
   * @param tabLines the list of tabLines you want to choose from
   */
  chooseTabLine(note: NoteOneInterface, tabLines: TabLine[]): number {
    //choose the right string number according to the note to play : the string root note should be lower than the note and also the closest note
    if (note instanceof NoteOneSilence) return -1;

    const midi = note.getMidi();
    let minDifference = midi - tabLines[0].getRoot().getMidi();
    let chosenIndex: number = 0;

    for (let i = 0; i < tabLines.length; i++) {
      const tabLine = tabLines[i];
      if (tabLine.getRoot().getMidi() === midi) {
        return i;
      }
    }

    chosenIndex = 0;
    for (let stringNumber = 0; stringNumber < tabLines.length; stringNumber++) {
      const tabLine = tabLines[stringNumber];
      const tabLineRoot = tabLine.getRoot().getMidi();
      const currentDifference = midi - tabLineRoot;
      if (
        currentDifference > 0 &&
        (currentDifference <= minDifference || minDifference < 0)
      ) {
        minDifference = currentDifference;
        chosenIndex = stringNumber;
      }
    }

    if (minDifference > 0) return chosenIndex;

    // If no lower tabLine is found, we choose the closest tabLine even if the root is higher than the note
    minDifference = Math.abs(minDifference);
    chosenIndex = 0;
    for (let stringNumber = 0; stringNumber < tabLines.length; stringNumber++) {
      const tabLine = tabLines[stringNumber];
      const tabLineRoot = tabLine.getRoot().getMidi();
      const currentDifference = Math.abs(midi - tabLineRoot);
      if (currentDifference <= minDifference) {
        minDifference = currentDifference;
        chosenIndex = stringNumber;
      }
    }

    return chosenIndex;
  }
}
