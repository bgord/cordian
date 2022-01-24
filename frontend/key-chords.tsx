import { h, Fragment } from "preact";

import { useToggle } from "./use-toggle";
import { Note, NoteType } from "./note";

import { MajorKeyChords, MinorKeyChords } from "./key-chord";

export function KeyChords(props: { selectedNote: NoteType }) {
  const note = new Note(props.selectedNote);

  return (
    <div>
      <div data-mt="24" data-mb="12">
        Key chords
      </div>

      <ul
        data-display="flex"
        data-bg="gray-200"
        data-pt="12"
        data-px="24"
        data-pb="0"
        style="list-style: none"
      >
        {[MajorKeyChords, MinorKeyChords].map((KeyChords) => {
          const keyChords = new KeyChords(note);

          return (
            <li
              data-display="flex"
              data-direction="column"
              data-mb="24"
              data-mr="48"
            >
              <small data-fs="14">{keyChords.name()}</small>

              <div data-display="flex" data-direction="column" data-mt="24">
                {keyChords.chords.map((chord) => {
                  const details = useToggle();

                  return (
                    <Fragment>
                      <div data-display="flex" data-cross="center" data-mb="6">
                        <button
                          class="c-button"
                          onClick={details.toggle}
                          data-variant="bare"
                          data-mr="24"
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

                        <div data-mr="12">{chord.order}</div>
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
