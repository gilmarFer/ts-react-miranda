import React from 'react';
import NavBar from '../../components/Navbar';
import {
  HomePageStyle,
  LeftContainer,
  RightContainer,
  Login,
  Register,
} from './style';
import HomeImg from '../../img/homeImg.png';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
  return (
    <>
      <NavBar isLoggedIn={false} />
      <HomePageStyle>
        <LeftContainer>
          <h1>
            GQ <span>Notes</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <h6>
            If you are going to use a passage of Lorem Ipsum, you need to be{' '}
            <br />
            sure there isnt anything embarrassing hidden in the middle of text.
          </h6>
          <Link to="/login">
            <Login>Dashboard</Login>
          </Link>
          <Link to="/register">
            <Register>Register</Register>
          </Link>
        </LeftContainer>
        <RightContainer>
          <img src={HomeImg} alt="notes" />
        </RightContainer>
      </HomePageStyle>
      <Footer />
    </>
  );
}
