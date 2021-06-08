import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  background: #0199ff;
  @media (max-width: 700px) {
    padding: 1rem 0.5rem;
  }
`;

export const Logo = styled.div`
  color: #ffffff;
  font-weight: 800;
  font-size: 1.5rem;
  span {
    color: #e4e4e4;
    font-weight: 100;
  }

  a,
  a:active,
  a:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Menu = styled.div``;

export const Button = styled.button`
  padding: 0.5rem 1rem;
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

  a,
  a:active,
  a:hover {
    color: white;
    text-decoration: none;
  }
`;

export const Register = styled(Button)`
  background: #ffffff;
  color: #0199ff;

  a,
  a:active,
  a:hover {
    font-weight: 700;
    color: #0199ff;
    text-decoration: none;
  }
`;
