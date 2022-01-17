import { Key } from "./key";

class Chord {
  root: Key;

  keys: Key[] = [];

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
  build() {
    this.keys = [this.root, this.majorThird(), this.perfectFifth()];
    return this;
  }

  name() {
    return `${this.root.format()} maj`;
  }
}

export class MinorTriad extends Chord {
  build() {
    this.keys = [this.root, this.minorThird(), this.perfectFifth()];
    return this;
  }

  name() {
    return `${this.root.format()} min`;
  }
}

export class DiminishedTriad extends Chord {
  build() {
    this.keys = [this.root, this.minorThird(), this.diminishedFifth()];
    return this;
  }

  name() {
    return `${this.root.format()} dim`;
  }
}

export class AugmentedTriad extends Chord {
  build() {
    this.keys = [this.root, this.majorThird(), this.augmentedFifth()];
    return this;
  }

  name() {
    return `${this.root.format()} aug`;
  }
}
