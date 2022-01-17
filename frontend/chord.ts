import { Key } from "./key";

class Chord {
  root: Key;

  constructor(root: Key) {
    this.root = root;
  }

  majorThird(): Key {
    return this.root.wholestep().wholestep();
  }

  minorThird(): Key {
    return this.root.wholestep().halfstep();
  }

  perfectFifth(): Key {
    return this.root.wholestep().wholestep().wholestep().halfstep();
  }

  diminishedFifth(): Key {
    return this.root.wholestep().wholestep().wholestep();
  }

  augmentedFifth(): Key {
    return this.root.wholestep().wholestep().wholestep().wholestep();
  }
}

export class MajorTriad extends Chord {
  build(): [Key, Key, Key] {
    return [this.root, this.majorThird(), this.perfectFifth()];
  }

  format() {
    return this.build().map((key) => key.format());
  }

  name() {
    return `${this.root.format()} maj`;
  }
}

export class MinorTriad extends Chord {
  build(): [Key, Key, Key] {
    return [this.root, this.minorThird(), this.perfectFifth()];
  }

  format() {
    return this.build().map((key) => key.format());
  }

  name() {
    return `${this.root.format()} min`;
  }
}

export class DiminishedTriad extends Chord {
  build(): [Key, Key, Key] {
    return [this.root, this.minorThird(), this.diminishedFifth()];
  }

  format() {
    return this.build().map((key) => key.format());
  }

  name() {
    return `${this.root.format()} dim`;
  }
}

export class AugmentedTriad extends Chord {
  build(): [Key, Key, Key] {
    return [this.root, this.majorThird(), this.augmentedFifth()];
  }

  format() {
    return this.build().map((key) => key.format());
  }

  name() {
    return `${this.root.format()} aug`;
  }
}
