import { h } from "preact";

import { useToggle } from "./use-toggle";
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
          const details = useToggle();

          return (
            <li data-mb="24">
              <div data-display="flex" data-main="between" data-cross="center">
                <div data-mr="24">
                  {chord.notes.map((note) => (
                    <strong data-mr="6">{note.format()}</strong>
                  ))}
                </div>

                <small data-fs="14" data-ml="auto" data-mr="12">
                  {chord.name()}
                </small>

                <button
                  class="c-button"
                  data-variant="bare"
                  onClick={details.toggle}
                >
                  {details.off && (
                    <img
                      height="12"
                      width="12"
                      loading="eager"
                      src="/static/arrow-down-icon.svg"
                      alt=""
                    />
                  )}

                  {details.on && (
                    <img
                      height="12"
                      width="12"
                      loading="eager"
                      src="/static/arrow-up-icon.svg"
                      alt=""
                    />
                  )}
                </button>
              </div>

              {details.on && (
                <ul
                  style="list-style: none;"
                  data-mt="6"
                  data-pb="6"
                  data-bcb="gray-300"
                  data-bwb="2"
                >
                  <li>
                    <small>First inversion</small>
                    {chord.firstInversion().map((note) => (
                      <strong data-mr="6">{note.format()}</strong>
                    ))}
                  </li>

                  <li data-mt="6">
                    <small>Second inversion</small>
                    {chord.secondInversion().map((note) => (
                      <strong data-mr="6">{note.format()}</strong>
                    ))}
                  </li>

                  <li data-mt="6">
                    <small>Third inversion</small>
                    {chord.thirdInversion().map((note) => (
                      <strong data-mr="6">{note.format()}</strong>
                    ))}
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
