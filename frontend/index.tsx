import { h, render } from "preact";

import { useList } from "./use-list";

import { Note } from "./note";

import { Triads } from "./triads";
import { SeventhChords } from "./seventh-chords";
import { Keys } from "./keys";
import { KeyChords } from "./key-chords";

function App() {
  const [[selectedNote], actions] = useList<Note["value"]>({
    updaterFn: (_, payload) => {
      if (Array.isArray(payload)) return [payload[0]];
      return [payload];
    },
  });

  return (
    <main>
      <ul data-display="flex" style="list-style: none">
        {Note.notes.map((note) => {
          const currentNote = new Note(note);

          return (
            <li data-m="24" data-mr="12">
              <button
                class="c-button"
                data-variant={
                  currentNote.value === selectedNote ? "primary" : "secondary"
                }
                onClick={() => actions.toggle(currentNote.value)}
                style="min-width: 45px"
              >
                {currentNote.format()}
              </button>
            </li>
          );
        })}
      </ul>

      {selectedNote !== undefined && (
        <div data-ml="24" data-mt="48">
          <h3
            data-transform="uppercase"
            data-fs="14"
            data-ls="1"
            data-fw="400"
            data-color="gray-700"
          >
            Selected note:{" "}
            <strong data-fs="16" data-color="black">
              {Note.format(selectedNote)}
            </strong>
          </h3>

          <section data-display="flex">
            <Triads selectedNote={selectedNote} />
            <div data-mr="72" />
            <SeventhChords selectedNote={selectedNote} />
            <div data-mr="72" />
            <Keys selectedNote={selectedNote} />
            <div data-mr="72" />
            <KeyChords selectedNote={selectedNote} />
          </section>
        </div>
      )}

      <details data-ml="24">
        <summary>Role of chords in a key</summary>
        <ul data-ml="24">
          <li data-mt="6">
            I (tonic) - resolved, peaceful, every chord wants to move back there
          </li>
          <li data-mt="6">V (dominant) - unresolved, tenseful</li>
        </ul>
      </details>

      <details data-ml="24">
        <summary>Leading note</summary>
        <p data-mt="6">A note just halfstep below the root note.</p>
      </details>

      <details data-ml="24">
        <summary>Chord rhythm patterns</summary>

        <ul>
          <li>1 2 3 (playing chord notes separately)</li>
        </ul>
      </details>

      <details data-ml="24">
        <summary>Time signatures</summary>

        <p>3/4 means there are 3 quarter notes in a measure </p>
        <p>1/2 means there is 1 half note in a measure </p>
      </details>
    </main>
  );
}

render(<App />, document.querySelector("#root") as Element);
