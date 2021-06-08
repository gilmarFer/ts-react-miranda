import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import LoadSpinner from '../LoadSpinner';
import { ModalBody, ModalContainer, ModalBtn, Modalbtns, Done } from './style';

type ModalProps = {
  fn: () => void;
  isOpen: boolean;
  title?: string;
  body?: string;
  check?: boolean;
};

export default function DashModal({ fn, isOpen }: ModalProps): JSX.Element {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [noteCheck, setNoteCheck] = useState(false);
  const [isload, setIsLoad] = useState(false);

  const host = 'http://localhost:3001';

  const checkTitleInput = (): boolean => {
    if (noteTitle === '') {
      toast.warn('Field title is required');
      return false;
    }
    return true;
  };

  const clearFiles = () => {
    setNoteTitle('');
    setNoteBody('');
    setNoteCheck(false);
  };

  const saveNote = () => {
    setIsLoad(true);
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      userId: id,
      noteTitle: noteTitle,
      noteBody: noteBody,
      noteCheck,
    };
    axios
      .post(`${host}/notes/add`, bodyParameters, config)
      .then(() => {
        setIsLoad(false);
        toast.success('New note save with sucess!! ');
        fn();
      })
      .catch(() => {
        setIsLoad(false);
        toast.error('Unknowwn error ');
      });
  };

  return (
    <>
      <LoadSpinner isLoad={isload} />
      <ModalContainer show={isOpen ? 1 : 0}>
        <ModalBody>
          <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={(event) => setNoteTitle(event.target.value)}
          />
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={3}
            placeholder="Note"
            value={noteBody}
            onChange={(event) => setNoteBody(event.target.value)}
          ></textarea>
          <Done>
            Done:
            <input
              type="checkbox"
              prefix="Done"
              checked={noteCheck}
              onChange={() => setNoteCheck(!noteCheck)}
            />
          </Done>
          <Modalbtns>
            <ModalBtn
              cor={'#0189E5'}
              onClick={() => {
                checkTitleInput() ? saveNote() : null;
              }}
            >
              Save
            </ModalBtn>
            <ModalBtn
              cor={'red'}
              onClick={() => {
                fn();
                clearFiles();
              }}
            >
              Cancel
            </ModalBtn>
          </Modalbtns>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
