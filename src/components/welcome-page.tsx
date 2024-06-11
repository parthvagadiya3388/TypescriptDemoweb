import React from 'react';
import Welcome1 from './welcome-first';
import Footer from './footer';
import Header from './header';
import Welcome2 from './welcome-sec';

const Welcome: React.FC = () => {
  return (
    <>
      <Header />
      <Welcome1 />
      <Welcome2 />
      <Footer />
    </>
  );
}

export default Welcome;
