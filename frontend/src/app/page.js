"use client";
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import classes from './page.module.css'
import Main from './Main/page';

const Home = () => {

  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;