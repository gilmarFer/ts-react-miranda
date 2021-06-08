import React from 'react';
import { Link } from 'react-router-dom';
import { Login, Logo, Menu, NavContainer, Register } from './style';

type NavBarProps = {
  isLoggedIn: boolean;
};

export default function NavBar({ isLoggedIn }: NavBarProps): JSX.Element {
  const userEmail = localStorage.getItem('email');
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <NavContainer>
      <Logo>
        <Link to="/">
          GQ <span>Notes</span>
        </Link>
      </Logo>
      {isLoggedIn ? (
        <Menu>
          <Login>Logged in with: {userEmail}</Login>
          <Link to="/" onClick={logOut}>
            <Register>Logout</Register>
          </Link>
        </Menu>
      ) : (
        <Menu>
          <Link to="/login">
            <Login>Login</Login>
          </Link>
          <Link to="/register">
            <Register>Register</Register>
          </Link>
        </Menu>
      )}
    </NavContainer>
  );
}
