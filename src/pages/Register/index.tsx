import React from 'react';
import { LoginContainer, LeftContainer, RightContainer } from './style';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../components/Navbar';
import resgisterImg from '../../img/register.png';
import Footer from '../../components/Footer';

export default function RegisterPage(): JSX.Element {
  const history = useHistory();
  const host = 'http://localhost:3001';

  const checkInputs = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.currentTarget;
    if (!validator.isEmail(email.value)) {
      toast.warn('Email invalid');
      return;
    }
    if (password.value < 5) {
      toast.warn('Password must be at least 6 characters long.');
      return;
    }
    if (password.value !== confirmPassword.value) {
      toast.warn("Passwords don't match");
      return;
    }
    createUser(email.value, password.value);
  };

  const createUser = (email: string, password: string): void => {
    axios
      .post(`${host}/users`, {
        email,
        password,
      })
      .then(() => {
        toast.info('User created successfully, redirected...');
        setTimeout(() => {
          axios
            .post(`${host}/auth`, {
              email,
              password,
            })
            .then((response) => {
              const { token } = response.data;
              const { id, email } = response.data.user;
              localStorage.setItem('token', token);
              localStorage.setItem('id', id);
              localStorage.setItem('email', email);
              history.push('/dashboard');
            });
        }, 1500);
      })
      .catch((err) => {
        if (err.response.data) toast.error('Email already exists');
      });
  };

  return (
    <>
      <NavBar isLoggedIn={false} />
      <LoginContainer>
        <LeftContainer>
          <h2>Register</h2>
          <form onSubmit={checkInputs}>
            <label htmlFor="email">
              Email
              <input type="text" name="email" placeholder="victor@gmail.com" />
            </label>
            <label htmlFor="email">
              Password
              <input type="password" name="password" placeholder="********" />
            </label>
            <label htmlFor="email">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
              />
            </label>
            <button type="submit">Register</button>
            <h5>
              Do you have a account? <Link to="/login">Login</Link>
            </h5>
          </form>
        </LeftContainer>
        <RightContainer>
          <img src={resgisterImg} alt="login" />
        </RightContainer>
      </LoginContainer>
      <Footer />
    </>
  );
}
