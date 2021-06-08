import styled from 'styled-components';

export const HomePageStyle = styled.div`
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

  h1 {
    font-weight: 700;
    color: #303030;
    margin: 2rem 0;
    span {
      font-weight: 200;
    }
  }

  p {
    color: #4d4d4d;
    margin-top: 2rem;
  }
  h6 {
    color: #5f5f5f;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export const RightContainer = styled.div`
  text-align: center;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin: 2rem 0;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  color: white;
  box-shadow: none;
  border: 0;
  font-weight: 700;
  transition: all 300ms;

  :hover {
    opacity: 0.8;
  }
`;

export const Login = styled(Button)`
  background: transparent;
  margin-right: 1rem;
  border: solid #0199ff 2px;
  color: #0199ff;

  a,
  a:active,
  a:hover {
    color: black;
    text-decoration: none;
  }
`;

export const Register = styled(Button)`
  background: #0199ff;
  color: white;
  border: solid #0199ff 2px;
  margin-left: 1rem;

  a,
  a:active,
  a:hover {
    color: white;
    text-decoration: none;
  }
`;
