import { h } from "preact";

import { Key, KeyType } from "./key";

import {
  MajorTriad,
  MinorTriad,
  DiminishedTriad,
  AugmentedTriad,
} from "./chord";

export function Triads(props: { selectedKey: KeyType }) {
  const key = new Key(props.selectedKey);

  return (
    <div data-mr="72">
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
            const chord = new Triad(key);

            return (
              <li data-display="flex" data-main="between" data-mb="24">
                <div>
                  {chord.keys.map((key) => (
                    <strong data-mr="6">{key.format()}</strong>
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
