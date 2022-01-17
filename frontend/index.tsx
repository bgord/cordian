import { h, render } from "preact";

import { useList } from "./use-list";
import { Key } from "./key";

function App() {
  const [[key], actions] = useList<Key["value"]>({
    updaterFn: (_, payload) => {
      if (Array.isArray(payload)) return [payload[0]];
      return [payload];
    },
  });

  return (
    <main>
      <ul data-display="flex" style="list-style: none;">
        {Key.notes.map((note) => {
          const key = new Key(note);

          return (
            <li data-m="24">
              <button
                class="c-button"
                data-variant="bare"
                onClick={() => actions.toggle(key.value)}
              >
                {key.format()}
              </button>
            </li>
          );
        })}
      </ul>

      {key !== undefined && (
        <section data-ml="24">
          <h3>Selected key: {Key.format(key)}</h3>
        </section>
      )}
    </main>
  );
}

render(<App />, document.querySelector("#root") as Element);
