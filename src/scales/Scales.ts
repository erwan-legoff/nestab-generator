import { GenericalScale } from './GenericalScale';

export class PentatonicScale extends GenericalScale {
  static readonly label = 'Pentatonic';
  constructor() {
    super([0, 3, 5, 7, 10]);
  }
}
export class MajorPentatonicScale extends GenericalScale {
  static readonly label = 'Major Pentatonic';
  constructor() {
    super([0, 2, 4, 7, 9]);
  }
}
export class ChromaticScale extends GenericalScale {
  static readonly label = 'Chromatic';
  constructor() {
    super([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  }
}
export class MajorScale extends GenericalScale {
  static readonly label = 'Major Natural';
  constructor() {
    super([0, 2, 4, 5, 7, 9, 11]);
  }
}
export class MinorNaturalScale extends GenericalScale {
  static readonly label = 'Minor Natural';
  constructor() {
    super([0, 2, 3, 5, 7, 8, 10]);
  }
}
export class MinorHarmonicScale extends GenericalScale {
  static readonly label = 'Minor Harmonic';
  constructor() {
    super([0, 2, 3, 5, 7, 8, 11]);
  }
}
export class MinorMelodicScale extends GenericalScale {
  static readonly label = 'Minor Melodic';
  constructor() {
    super([0, 2, 3, 5, 7, 8, 9]);
  }
}
export class AlgerianScale extends GenericalScale {
  static readonly label = 'Algerian';
  constructor() {
    super([0, 2, 3, 6, 7, 9, 11]);
  }
}
export class AlteredScale extends GenericalScale {
  static readonly label = 'Altered';
  constructor() {
    super([0, 1, 3, 4, 6, 8, 10]);
  }
}
export class AugmentedScale extends GenericalScale {
  static readonly label = 'Augmented';
  constructor() {
    super([0, 3, 4, 7, 8, 11]);
  }
}
export class BebopDominantScale extends GenericalScale {
  static readonly label = 'Bebop Dominant';
  constructor() {
    super([0, 2, 4, 5, 7, 9, 10, 11]);
  }
}
export class BluesScale extends GenericalScale {
  static readonly label = 'Blues';
  constructor() {
    super([0, 3, 5, 6, 7, 10]);
  }
}
export class DorianScale extends GenericalScale {
  static readonly label = 'Dorian';
  constructor() {
    super([0, 2, 3, 5, 7, 9, 10]);
  }
}
export class DoubleHarmonicScale extends GenericalScale {
  static readonly label = 'Double Harmonic';
  constructor() {
    super([0, 1, 4, 5, 7, 8, 10]);
  }
}
export class EnigmaticScale extends GenericalScale {
  static readonly label = 'Enigmatic';
  constructor() {
    super([0, 1, 4, 6, 8, 10, 11]);
  }
}
export class FlamencoScale extends GenericalScale {
  static readonly label = 'Flamenco';
  constructor() {
    super([0, 1, 4, 5, 7, 8, 11]);
  }
}
export class GypsyScale extends GenericalScale {
  static readonly label = 'Gypsy';
  constructor() {
    super([0, 2, 3, 6, 7, 8, 10]);
  }
}
export class HalfDiminishedScale extends GenericalScale {
  static readonly label = 'Half Diminished';
  constructor() {
    super([0, 2, 3, 5, 6, 8, 10]);
  }
}
export class HarmonicMajorScale extends GenericalScale {
  static readonly label = 'Harmonic Major';
  constructor() {
    super([0, 2, 4, 5, 7, 8, 11]);
  }
}
export class HungarianMinorScale extends GenericalScale {
  static readonly label = 'Hungarian Minor';
  constructor() {
    super([0, 2, 3, 6, 7, 8, 11]);
  }
}
export class HungarianMajorScale extends GenericalScale {
  static readonly label = 'Hungarian Major';
  constructor() {
    super([0, 3, 4, 6, 7, 9, 10]);
  }
}
export class InScale extends GenericalScale {
  static readonly label = 'In';
  constructor() {
    super([0, 1, 5, 7, 8]);
  }
}
export class InSenScale extends GenericalScale {
  static readonly label = 'In Sen';
  constructor() {
    super([0, 1, 5, 7, 10]);
  }
}
export class IstrianScale extends GenericalScale {
  static readonly label = 'Istrian';
  constructor() {
    super([0, 1, 3, 4, 6, 7]);
  }
}
export class IwatoScale extends GenericalScale {
  static readonly label = 'Iwato';
  constructor() {
    super([0, 1, 5, 6, 10]);
  }
}
export class LocrianScale extends GenericalScale {
  static readonly label = 'Locrian';
  constructor() {
    super([0, 1, 3, 5, 6, 8, 10]);
  }
}
export class LocrianMajorScale extends GenericalScale {
  static readonly label = 'Locrian Major';
  constructor() {
    super([0, 2, 4, 5, 6, 8, 10]);
  }
}
export class LydianScale extends GenericalScale {
  static readonly label = 'Lydian';
  constructor() {
    super([0, 2, 4, 6, 7, 9, 11]);
  }
}
export class LydianAugmentedScale extends GenericalScale {
  static readonly label = 'Lydian Augmented';
  constructor() {
    super([0, 2, 4, 6, 8, 9, 11]);
  }
}
export class BebopMajorScale extends GenericalScale {
  static readonly label = 'Bebop Major';
  constructor() {
    super([0, 2, 4, 5, 7, 8, 9, 11]);
  }
}
export class MixolydianScale extends GenericalScale {
  static readonly label = 'Mixolydian';
  constructor() {
    super([0, 2, 4, 5, 7, 9, 10]);
  }
}
export class PersianScale extends GenericalScale {
  static readonly label = 'Persian';
  constructor() {
    super([0, 1, 4, 5, 6, 8, 11]);
  }
}
export class PhrygianDominantScale extends GenericalScale {
  static readonly label = 'Phrygian Dominant';
  constructor() {
    super([0, 1, 4, 5, 7, 8, 10]);
  }
}
export class PhrygianScale extends GenericalScale {
  static readonly label = 'Phrygian';
  constructor() {
    super([0, 1, 3, 5, 7, 8, 10]);
  }
}
export class TritoneScale extends GenericalScale {
  static readonly label = 'Tritone';
  constructor() {
    super([0, 1, 4, 6, 7, 10]);
  }
}
export class UkrainianDorianScale extends GenericalScale {
  static readonly label = 'Ukrainian Dorian';
  constructor() {
    super([0, 2, 3, 6, 7, 9, 10]);
  }
}
