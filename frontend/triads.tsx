import { h, Fragment } from "preact";

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
    <Fragment>
      <div data-mt="24">Triads</div>

      <ul
        data-display="flex"
        data-direction="column"
        data-mt="12"
        style="list-style: none"
      >
        {[MajorTriad, MinorTriad, DiminishedTriad, AugmentedTriad].map(
          (Triad) => {
            const chord = new Triad(key).build();

            return (
              <li data-display="flex" data-mb="24">
                <div>
                  {chord.keys.map((key) => (
                    <strong data-mr="6">{key.format().toUpperCase()}</strong>
                  ))}
                </div>

                <small data-fs="14" data-ml="12">
                  {chord.name()}
                </small>
              </li>
            );
          }
        )}
      </ul>
    </Fragment>
  );
}
