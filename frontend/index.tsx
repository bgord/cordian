import { h, render } from "preact";

import { useList } from "./use-list";

import { Key } from "./key";
import { Triads } from "./triads";

function App() {
  const [[selectedkey], actions] = useList<Key["value"]>({
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
                  key.value === selectedkey ? "primary" : "secondary"
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

      {selectedkey !== undefined && (
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
              {Key.format(selectedkey)}
            </strong>
          </h3>

          <Triads selectedKey={selectedkey} />
        </div>
      )}
    </main>
  );
}

render(<App />, document.querySelector("#root") as Element);
