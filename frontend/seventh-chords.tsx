import { h } from "preact";

import { Note, NoteType } from "./note";

import {
  MajorSeventh,
  MinorSeventh,
  MinorMajorSeventh,
  DominantSeventh,
  HalfDiminishedSeventh,
  DiminishedSeventh,
  AugmentedMajorSeventh,
} from "./chord";

export function SeventhChords(props: { selectedNote: NoteType }) {
  const note = new Note(props.selectedNote);

  return (
    <div>
      <div data-mt="24" data-mb="12">
        Seventh chords
      </div>

      <ul
        data-display="flex"
        data-direction="column"
        data-bg="gray-200"
        data-pt="12"
        data-px="24"
        data-pb="0"
        style="list-style: none"
      >
        {[
          MajorSeventh,
          MinorSeventh,
          MinorMajorSeventh,
          DominantSeventh,
          HalfDiminishedSeventh,
          DiminishedSeventh,
          AugmentedMajorSeventh,
        ].map((SeventhChord) => {
          const chord = new SeventhChord(note);

          return (
            <li data-display="flex" data-main="between" data-mb="24">
              <div>
                {chord.notes.map((note) => (
                  <strong data-mr="6">{note.format()}</strong>
                ))}
              </div>

              <small data-fs="14" data-ml="24">
                {chord.name()}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
