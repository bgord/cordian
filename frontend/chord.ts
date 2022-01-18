import { Key } from "./key";

abstract class Chord {
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

  majorSeventh(): Key {
    return this.root
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .halfstep();
  }

  minorSeventh(): Key {
    return this.root
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep();
  }

  diminishedSeventh(): Key {
    return this.root.wholestep().wholestep().wholestep().wholestep().halfstep();
  }
}

export class MajorTriad extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [this.root, this.majorThird(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}maj`;
  }
}

export class MinorTriad extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [this.root, this.minorThird(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}min`;
  }
}

export class DiminishedTriad extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [this.root, this.minorThird(), this.diminishedFifth()];
  }

  name() {
    return `${this.root.format()}dim`;
  }
}

export class AugmentedTriad extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [this.root, this.majorThird(), this.augmentedFifth()];
  }

  name() {
    return `${this.root.format()}aug`;
  }
}

export class MajorSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.majorThird(),
      this.perfectFifth(),
      this.majorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}maj7`;
  }
}

export class MinorSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.minorThird(),
      this.perfectFifth(),
      this.minorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}min7`;
  }
}

export class DominantSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.majorThird(),
      this.perfectFifth(),
      this.minorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}7`;
  }
}

export class MinorMajorSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.minorThird(),
      this.perfectFifth(),
      this.majorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}mM7`;
  }
}

export class HalfDiminishedSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.minorThird(),
      this.diminishedFifth(),
      this.minorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}m7b5`;
  }
}

export class DiminishedSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.minorThird(),
      this.diminishedFifth(),
      this.diminishedSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}dim7`;
  }
}

export class AugmentedMajorSeventh extends Chord {
  constructor(root: Key) {
    super(root);
    this.keys = [
      this.root,
      this.majorThird(),
      this.augmentedFifth(),
      this.majorSeventh(),
    ];
  }

  name() {
    return `${this.root.format()}aug7`;
  }
}
