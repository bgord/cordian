import { h, render } from "preact";

import { useList } from "./use-list";

import { Key } from "./key";
import { Triads } from "./triads";
import { SeventhChords } from "./seventh-chords";

function App() {
  const [[selectedKey], actions] = useList<Key["value"]>({
    updaterFn: (_, payload) => {
      if (Array.isArray(payload)) return [payload[0]];
      return [payload];
    },
  });

  return (
    <main>
      <ul data-display="flex" style="list-style: none">
        {Key.notes.map((note) => {
          const key = new Key(note);

          return (
            <li data-m="24" data-mr="12">
              <button
                class="c-button"
                data-variant={
                  key.value === selectedKey ? "primary" : "secondary"
                }
                onClick={() => actions.toggle(key.value)}
                style="min-width: 45px"
              >
                {key.format()}
              </button>
            </li>
          );
        })}
      </ul>

      {selectedKey !== undefined && (
        <div data-ml="24" data-mt="48">
          <h3
            data-transform="uppercase"
            data-fs="14"
            data-ls="1"
            data-fw="400"
            data-color="gray-700"
          >
            Selected key:{" "}
            <strong data-fs="16" data-color="black">
              {Key.format(selectedKey)}
            </strong>
          </h3>

          <section data-display="flex">
            <Triads selectedKey={selectedKey} />
            <SeventhChords selectedKey={selectedKey} />
          </section>
        </div>
      )}
    </main>
  );
}

render(<App />, document.querySelector("#root") as Element);
