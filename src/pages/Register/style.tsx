import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: calc(100vh - 6.2rem);
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 200;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    gap: 1rem;
  }

  label {
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: #585858;

    input {
      padding: 0.5rem 0.2rem;
      border: solid 1px #c0c0c0;
      display: flex;
      align-items: center;
    }

    input:focus {
      border-left: solid 3px #0084ff;
    }
  }

  button {
    width: 50%;
    margin: 1rem auto 0.3rem auto;
    border: none;
    background: #0084ff;
    color: white;
    padding: 0.8rem 0;
    border-radius: 8px;
  }

  h5 {
    color: #585858;

    a,
    a:hover,
    a:visited,
    a:active {
      color: #585858;
      text-decoration: none;
      font-weight: 700;
    }
  }
`;

export const RightContainer = styled.div`
  text-align: center;
  width: 100%;
  img {
    width: 80%;
  }
`;
