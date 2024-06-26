import { h } from "preact";

import * as Music from "./music";

export function Keys(props: { selectedNote: Music.NoteType }) {
  const note = new Music.Note(props.selectedNote);

  return (
    <div>
      <div data-mt="24" data-mb="12">
        Keys
      </div>

      <ul
        data-display="flex"
        data-direction="column"
        data-bg="gray-200"
        data-pt="12"
        data-px="24"
        data-pb="0"
      >
        {[Music.MajorKey, Music.MinorKey].map((Key) => {
          const key = new Key(note);

          return (
            <li
              key={key.name()}
              data-display="flex"
              data-main="between"
              data-mb="24"
            >
              <div>
                {key.notes.map((note, index, notes) => {
                  const isLast = index === notes.length - 1;

                  return (
                    <strong key={note.value.toString()} data-mr="6">
                      {note.format()} {!isLast && " - "}
                    </strong>
                  );
                })}
              </div>

              <small data-fs="14" data-ml="24">
                {key.name()}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
