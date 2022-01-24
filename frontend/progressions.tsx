import { h, Fragment } from "preact";

import { useToggle } from "./use-toggle";
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
                {progression.chords.map((chord) => {
                  const details = useToggle();

                  return (
                    <Fragment>
                      <div data-mb="6">
                        <button
                          class="c-button"
                          onClick={details.toggle}
                          data-variant="bare"
                          data-mr="12"
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

                        <strong>{chord.name()}</strong>
                      </div>

                      {details.on && (
                        <ul
                          style="list-style: none;"
                          data-mb="12"
                          data-pb="6"
                          data-bcb="gray-300"
                          data-bwb="2"
                        >
                          <li>
                            <small>Root position</small>
                            {chord.notes.map((note) => (
                              <strong data-mr="6">{note.format()}</strong>
                            ))}
                          </li>

                          <li data-mt="6">
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
                        </ul>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
