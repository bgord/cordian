import _ from "lodash";

export type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type KeyNameType =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export class Key {
  value: KeyType;

  static notes: KeyType[] = _.range(0, 12) as KeyType[];

  constructor(note: number) {
    if (!Key.isKey(note)) {
      throw new Error(`Invalid key note: ${note}`);
    }

    this.value = note;
  }

  halfstep(): Key {
    return new Key(Key.notes[(this.value + 1) % Key.notes.length]);
  }

  wholestep(): Key {
    return this.halfstep().halfstep();
  }

  format() {
    return Key.format(this.value);
  }

  static format(value: KeyType): KeyNameType {
    const keyToKeyNameMap = new Map<KeyType, KeyNameType>();
    keyToKeyNameMap.set(0, "C");
    keyToKeyNameMap.set(1, "C#");
    keyToKeyNameMap.set(2, "D");
    keyToKeyNameMap.set(3, "D#");
    keyToKeyNameMap.set(4, "E");
    keyToKeyNameMap.set(5, "F");
    keyToKeyNameMap.set(6, "F#");
    keyToKeyNameMap.set(7, "G");
    keyToKeyNameMap.set(8, "G#");
    keyToKeyNameMap.set(9, "A");
    keyToKeyNameMap.set(10, "A#");
    keyToKeyNameMap.set(11, "B");

    return keyToKeyNameMap.get(value) as KeyNameType;
  }

  static isKey(value: number): value is KeyType {
    return Key.notes.some((key) => key === value);
  }
}
