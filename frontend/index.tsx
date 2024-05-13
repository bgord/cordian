import * as bg from "@bgord/frontend";
import { h, render } from "preact";

import { useList } from "./use-list";

import * as Music from "./music";

import { Triads } from "./triads";
import { SeventhChords } from "./seventh-chords";
import { Keys } from "./keys";
import { KeyChords } from "./key-chords";

function App() {
  const [[selectedNote], actions] = useList<Music.Note["value"]>({
    updaterFn: (_, payload) => {
      if (Array.isArray(payload)) return [payload[0]];
      return [payload];
    },
  });

  return (
    <main>
      <h1 data-p="12">Cordian</h1>

      <ul data-display="flex" data-gap="12" data-m="12" data-mt="24">
        {Music.Note.notes.map((note) => {
          const currentNote = new Music.Note(note);

          return (
            <li key={note.toString()}>
              <button
                class="c-button"
                data-variant={
                  currentNote.value === selectedNote ? "primary" : "secondary"
                }
                onClick={() => actions.toggle(currentNote.value)}
                {...bg.Rhythm().times(4).style.minWidth}
              >
                {currentNote.format()}
              </button>
            </li>
          );
        })}
      </ul>

      {selectedNote !== undefined && (
        <div data-ml="12" data-mt="48">
          <h3
            data-transform="uppercase"
            data-fs="14"
            data-ls="1"
            data-fw="400"
            data-color="gray-700"
          >
            Selected note:{" "}
            <strong data-fs="16" data-color="black">
              {Music.Note.format(selectedNote)}
            </strong>
          </h3>

          <section data-display="flex" data-gap="24">
            <Triads selectedNote={selectedNote} />
            <SeventhChords selectedNote={selectedNote} />
            <Keys selectedNote={selectedNote} />
            <KeyChords selectedNote={selectedNote} />
          </section>
        </div>
      )}
    </main>
  );
}

render(<App />, document.querySelector("#root") as Element);
