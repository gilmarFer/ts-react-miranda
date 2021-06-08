import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  z-index: 1000;

  img {
    width: 10%;
  }
`;
