import { h } from "preact";

import { Note, NoteType } from "./note";

import {
  MajorTriad,
  MinorTriad,
  DiminishedTriad,
  AugmentedTriad,
} from "./chord";

export function Triads(props: { selectedNote: NoteType }) {
  const note = new Note(props.selectedNote);

  return (
    <div>
      <div data-mt="24" data-mb="12">
        Triads
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
        {[MajorTriad, MinorTriad, DiminishedTriad, AugmentedTriad].map(
          (Triad) => {
            const chord = new Triad(note);

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
          }
        )}
      </ul>
    </div>
  );
}
