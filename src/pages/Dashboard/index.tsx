import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from '../../components/Navbar';
import {
  DashBoardContainer,
  Menu,
  Right,
  DashNav,
  Notes,
  SearchBtn,
  Divider,
  NewNoteBtn,
} from './style';
import { FaBorderAll, FaArchive } from 'react-icons/fa';
import DashModal from '../../components/Modal';
import Note from '../../components/Note';

export default function Dashboard(): JSX.Element {
  type NoteType = {
    userId: string;
    noteTitle: string;
    noteBody: string;
    check: boolean;
    id: string;
  };

  const history = useHistory();
  const host = 'http://localhost:3001';
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      userId: id,
    };
    axios
      .post(`${host}/notes`, bodyParameters, config)
      .then((response) => {
        setNotes(response.data);
      })
      .catch(() => {
        toast.info('Make login first! ');
        history.push('/login');
      });
  };

  console.log(notes);

  return (
    <>
      <DashModal
        isOpen={isModalOpen}
        fn={() => {
          setIsModalOpen(false);
          getAllNotes();
        }}
      />
      <NavBar isLoggedIn={true} />
      <DashBoardContainer>
        <Menu>
          <li onClick={() => console.log('all clicke')}>
            <FaBorderAll />
            <h5>All notes</h5>
          </li>
          <li>
            <FaArchive />
            <h5>Archives</h5>
          </li>
        </Menu>
        <Right>
          <DashNav>
            <input type="text" placeholder="Search" />
            <SearchBtn>Search</SearchBtn>
            <Divider />
            <NewNoteBtn
              onClick={() => {
                console.log('odal open');
                setIsModalOpen(true);
              }}
            >
              New Note
            </NewNoteBtn>
          </DashNav>
          <Notes>
            {notes
              .slice(0)
              .reverse()
              .map((item, index) => (
                <Note
                  key={`${item.noteBody}${index}`}
                  title={item.noteBody}
                  body={item.noteBody}
                  check={item.check}
                  id={item.id}
                />
              ))}
          </Notes>
        </Right>
      </DashBoardContainer>
    </>
  );
}
