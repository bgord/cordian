import _ from "lodash";

export type NoteType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type NoteNameType =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export class Note {
  value: NoteType;

  static notes: NoteType[] = _.range(0, 12) as NoteType[];

  constructor(note: number) {
    if (!Note.isNote(note)) {
      throw new Error(`Invalid note: ${note}`);
    }

    this.value = note;
  }

  halfstep(): Note {
    return new Note(Note.notes[(this.value + 1) % Note.notes.length]);
  }

  wholestep(): Note {
    return this.halfstep().halfstep();
  }

  format() {
    return Note.format(this.value);
  }

  static format(note: NoteType): NoteNameType {
    const noteToNoteNameMap = new Map<NoteType, NoteNameType>();
    noteToNoteNameMap.set(0, "C");
    noteToNoteNameMap.set(1, "C#");
    noteToNoteNameMap.set(2, "D");
    noteToNoteNameMap.set(3, "D#");
    noteToNoteNameMap.set(4, "E");
    noteToNoteNameMap.set(5, "F");
    noteToNoteNameMap.set(6, "F#");
    noteToNoteNameMap.set(7, "G");
    noteToNoteNameMap.set(8, "G#");
    noteToNoteNameMap.set(9, "A");
    noteToNoteNameMap.set(10, "A#");
    noteToNoteNameMap.set(11, "B");

    return noteToNoteNameMap.get(note) as NoteNameType;
  }

  static isNote(value: number): value is NoteType {
    return Note.notes.some((note) => note === value);
  }
}
