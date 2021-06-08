import styled from 'styled-components';

export const DashBoardContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Menu = styled.div`
  width: 30%;
  height: 100%;
  margin: 1rem 0.5rem 0 1rem;
  padding: 1rem;
  box-shadow: 5px 5px 20px #d8d7d7;
  border-radius: 10px;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.7rem;
    margin: 0.8rem 0;

    h5 {
      list-style: none;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 1rem;
`;

export const Notes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
`;

export const DashNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 5px 5px 20px #d8d7d7;
  border-radius: 10px;
  width: 100%;

  input {
    width: 70%;
    border: 0;
    border-bottom: solid 1px #b3b3b3;
  }
`;

export const SearchBtn = styled.div`
  border: 0;
  background: #0099ff;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;

export const NewNoteBtn = styled(SearchBtn)``;

export const Divider = styled.div`
  height: 30px;
  width: 2px;
  background: #b3b3b3;
`;
