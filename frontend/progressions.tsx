import { h } from "preact";

import { Note, NoteType } from "./note";

import { MajorProgression, MinorProgression } from "./progression";

export function Progressions(props: { selectedNote: NoteType }) {
  const note = new Note(props.selectedNote);

  return (
    <div>
      <div data-mt="24" data-mb="12">
        Progressions
      </div>

      <ul
        data-display="flex"
        data-bg="gray-200"
        data-pt="12"
        data-px="24"
        data-pb="0"
        style="list-style: none"
      >
        {[MajorProgression, MinorProgression].map((Progression) => {
          const progression = new Progression(note);

          return (
            <li
              data-display="flex"
              data-direction="column"
              data-main="between"
              data-mb="24"
              data-mr="48"
            >
              <small data-fs="14">{progression.name()}</small>

              <div data-display="flex" data-direction="column" data-mt="24">
                {progression.chords.map((chord) => (
                  <strong data-mb="12">{chord.name()}</strong>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
