import _ from "lodash";

export type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type KeyNameType =
  | "c"
  | "c#"
  | "d"
  | "d#"
  | "e"
  | "f"
  | "f#"
  | "g"
  | "g#"
  | "a"
  | "a#"
  | "b";

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
    keyToKeyNameMap.set(0, "c");
    keyToKeyNameMap.set(1, "c#");
    keyToKeyNameMap.set(2, "d");
    keyToKeyNameMap.set(3, "d#");
    keyToKeyNameMap.set(4, "e");
    keyToKeyNameMap.set(5, "f");
    keyToKeyNameMap.set(6, "f#");
    keyToKeyNameMap.set(7, "g");
    keyToKeyNameMap.set(8, "g#");
    keyToKeyNameMap.set(9, "a");
    keyToKeyNameMap.set(10, "a#");
    keyToKeyNameMap.set(11, "b");

    return keyToKeyNameMap.get(value) as KeyNameType;
  }

  static isKey(value: number): value is KeyType {
    return Key.notes.some((key) => key === value);
  }
}
