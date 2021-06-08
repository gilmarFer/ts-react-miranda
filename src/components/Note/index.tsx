import React, { useState } from 'react';
import { NoteContainer, Titleinput, BodyTextArea, NoteRowTitle } from './style';
import { MdMoreVert } from 'react-icons/md';

type NoteProps = {
  title: string;
  body: string;
  check: boolean;
  id?: string;
};

export default function Note({
  title,
  body,
  check,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: NoteProps): JSX.Element {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteBody, setNoteBody] = useState(body);
  const [noteCheck, setNoteCheck] = useState(check);

  return (
    <>
      <NoteContainer>
        <NoteRowTitle>
          <Titleinput
            type="text"
            value={noteTitle}
            onChange={(event) => setNoteTitle(event.target.value)}
          />
          <MdMoreVert />
        </NoteRowTitle>
        <BodyTextArea
          value={noteBody}
          onChange={(event) => setNoteBody(event.target.value)}
        />
        <input
          type="checkbox"
          checked={noteCheck}
          onChange={() => setNoteCheck(!noteCheck)}
        />
      </NoteContainer>
    </>
  );
}
