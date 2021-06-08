import styled from 'styled-components';

export const NoteContainer = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 20px #cfcfcf;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const NoteRowTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;
`;

export const Titleinput = styled.input`
  border: none;
  font-size: 1.2rem;
  padding: 0.8rem;
  width: 80%;
`;

export const BodyTextArea = styled.textarea`
  border: none;
  padding: 0.5rem;
`;
