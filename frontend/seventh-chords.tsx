import { h } from "preact";

import { Key, KeyType } from "./key";

import {
  MajorSeventh,
  MinorSeventh,
  MinorMajorSeventh,
  DominantSeventh,
  HalfDiminishedSeventh,
  DiminishedSeventh,
  AugmentedMajorSeventh,
} from "./chord";

export function SeventhChords(props: { selectedKey: KeyType }) {
  const key = new Key(props.selectedKey);

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
          const chord = new SeventhChord(key);

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
        })}
      </ul>
    </div>
  );
}
