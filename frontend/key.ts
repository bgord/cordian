import { Note } from "./note";

abstract class Key {
  root: Note;
  notes: Note[] = [];

  constructor(root: Note) {
    this.root = root;
  }

  abstract name(): string;
}

export class MajorKey extends Key {
  constructor(root: Note) {
    super(root);

    this.notes = [
      this.root,
      this.root.wholestep(),
      this.root.wholestep().wholestep(),
      this.root.wholestep().wholestep().halfstep(),
      this.root.wholestep().wholestep().halfstep().wholestep(),
      this.root.wholestep().wholestep().halfstep().wholestep().wholestep(),
      this.root
        .wholestep()
        .wholestep()
        .halfstep()
        .wholestep()
        .wholestep()
        .wholestep(),
    ];
  }

  name() {
    return `${this.root.format()} maj`;
  }
}

export class MinorKey extends Key {
  constructor(root: Note) {
    super(root);

    this.notes = [
      this.root,
      this.root.wholestep(),
      this.root.wholestep().halfstep(),
      this.root.wholestep().halfstep().wholestep(),
      this.root.wholestep().halfstep().wholestep().wholestep(),
      this.root.wholestep().halfstep().wholestep().wholestep().halfstep(),
      this.root
        .wholestep()
        .halfstep()
        .wholestep()
        .wholestep()
        .halfstep()
        .wholestep(),
    ];
  }

  name() {
    return `${this.root.format()} min`;
  }
}
