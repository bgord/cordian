/** @public */
import { Note } from "./note";

export abstract class Chord {
  root: Note;

  notes: Note[] = [];

  order?: string;

  constructor(root: Note, order?: string) {
    this.root = root;
    this.order = order;
  }

  majorSecond(): Note {
    return this.root.wholestep();
  }

  majorThird(): Note {
    return this.root.wholestep().wholestep();
  }

  minorThird(): Note {
    return this.root.wholestep().halfstep();
  }

  perfectFourth(): Note {
    return this.root.wholestep().wholestep().halfstep();
  }

  perfectFifth(): Note {
    return this.root.wholestep().wholestep().wholestep().halfstep();
  }

  diminishedFifth(): Note {
    return this.root.wholestep().wholestep().wholestep();
  }

  augmentedFifth(): Note {
    return this.root.wholestep().wholestep().wholestep().wholestep();
  }

  majorSeventh(): Note {
    return this.root
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .halfstep();
  }

  minorSeventh(): Note {
    return this.root
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep()
      .wholestep();
  }

  diminishedSeventh(): Note {
    return this.root.wholestep().wholestep().wholestep().wholestep().halfstep();
  }

  firstInversion(): Note[] {
    const [firstNote, ...rest] = this.notes;
    return [...rest, firstNote];
  }

  secondInversion(): Note[] {
    const [firstNote, secondNote, ...rest] = this.notes;
    return [...rest, firstNote, secondNote];
  }

  thirdInversion(): Note[] {
    const [firstNote, secondNote, thirdInversion, ...rest] = this.notes;

    if (!Array.isArray(rest)) {
      throw new Error(`Cannot get third inversion for chord ${this.name()}`);
    }

    return [...rest, firstNote, secondNote, thirdInversion];
  }

  abstract name(): string;
}

export class MajorTriad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.majorThird(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}maj`;
  }
}

export class MinorTriad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.minorThird(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}min`;
  }
}

export class DiminishedTriad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.minorThird(), this.diminishedFifth()];
  }

  name() {
    return `${this.root.format()}dim`;
  }
}

export class AugmentedTriad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.majorThird(), this.augmentedFifth()];
  }

  name() {
    return `${this.root.format()}aug`;
  }
}

export class Suspended2Triad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.majorSecond(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}sus2`;
  }
}

export class Suspended4Triad extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [this.root, this.perfectFourth(), this.perfectFifth()];
  }

  name() {
    return `${this.root.format()}sus4`;
  }
}

export class MajorSeventh extends Chord {
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
  constructor(root: Note, order?: string) {
    super(root, order);
    this.notes = [
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
