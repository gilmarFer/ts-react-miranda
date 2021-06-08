import React, { useEffect, useState } from 'react';
import { LoginContainer, LeftContainer, RightContainer } from './style';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../components/Navbar';
import loginImg from '../../img/login.png';
import Footer from '../../components/Footer';
import LoadSpinner from '../../components/LoadSpinner';

export default function LoginPage(): JSX.Element {
  const history = useHistory();
  const host = 'http://localhost:3001';
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    let isTokenValid = false;
    if (id || token) {
      setIsLoad(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        userId: id,
      };
      axios
        .post(`${host}/notes`, bodyParameters, config)
        .then(() => {
          isTokenValid = true;
          toast.success(`Loggged in with: ${localStorage.getItem('email')}`);
          history.push('/dashboard');
        })
        .catch(() => {
          return;
        })
        .then(() => {
          if (!isTokenValid) {
            setIsLoad(false);
          }
        });
    }
  }, []);

  const checkInputs = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    if (!validator.isEmail(email.value)) {
      toast.warn('Email invalid');
      return;
    }
    if (password.value < 5) {
      toast.warn('Password must be at least 6 characters long.');
      return;
    }
    LoginUser(email.value, password.value);
  };

  const LoginUser = (email: string, password: string) => {
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
      })
      .catch((err) => {
        if (err.response.data) toast.error('Email and password is incorrect');
      });
  };

  return (
    <>
      <LoadSpinner isLoad={isLoad} />
      <NavBar isLoggedIn={false} />
      <LoginContainer>
        <LeftContainer>
          <h2>Login</h2>
          <form onSubmit={checkInputs}>
            <label htmlFor="email">
              Email
              <input type="text" name="email" placeholder="victor@gmail.com" />
            </label>
            <label htmlFor="email">
              Password
              <input type="password" name="password" placeholder="********" />
            </label>
            <button type="submit">Login</button>
            <h5>
              Dont have a account? <Link to="register">Register</Link>
            </h5>
          </form>
        </LeftContainer>
        <RightContainer>
          <img src={loginImg} alt="login" />
        </RightContainer>
      </LoginContainer>
      <Footer />
    </>
  );
}
