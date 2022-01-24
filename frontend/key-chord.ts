import { Note } from "./note";
import { MajorKey, MinorKey } from "./key";
import { Chord, MinorTriad, MajorTriad, DiminishedTriad } from "./chord";

abstract class KeyChords {
  root: Note;
  chords: Chord[] = [];

  constructor(root: Note) {
    this.root = root;
  }

  abstract name(): string;
}

export class MajorKeyChords extends KeyChords {
  constructor(root: Note) {
    super(root);

    this.chords = new MajorKey(root).notes.map((note, index) => {
      if (index === 0) return new MajorTriad(note, "I");
      if (index === 1) return new MinorTriad(note, "ii");
      if (index === 2) return new MinorTriad(note, "iii");
      if (index === 3) return new MajorTriad(note, "IV");
      if (index === 4) return new MajorTriad(note, "V");
      if (index === 5) return new MinorTriad(note, "VI");
      return new DiminishedTriad(note, "vii°");
    });
  }

  name() {
    return `${this.root.format()} maj key chords`;
  }
}

export class MinorKeyChords extends KeyChords {
  constructor(root: Note) {
    super(root);

    this.chords = new MinorKey(root).notes.map((note, index) => {
      if (index === 0) return new MinorTriad(note, "i");
      if (index === 1) return new DiminishedTriad(note, "ii°");
      if (index === 2) return new MajorTriad(note, "III");
      if (index === 3) return new MinorTriad(note, "iv");
      if (index === 4) return new MinorTriad(note, "v");
      if (index === 5) return new MajorTriad(note, "VI");
      return new MajorTriad(note, "VII");
    });
  }

  name() {
    return `${this.root.format()} min key chords`;
  }
}
