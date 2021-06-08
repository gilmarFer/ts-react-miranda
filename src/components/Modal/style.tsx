import styled from 'styled-components';

type ModalProps = {
  show: number;
};

export const ModalContainer = styled.div<ModalProps>`
  opacity: ${(props) => `${props.show}`};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  transition: all 500ms;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #bbbbbb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  input {
    border: 0;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    font-size: 1.2rem;
  }

  textarea {
    border: 0;
    border-bottom: 1px solid #dddddd;
    width: 100%;
  }
`;

export const Done = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const Modalbtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

type ModalBtn = {
  cor: string;
};

export const ModalBtn = styled.div<ModalBtn>`
  background: ${(props) => props.cor};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
