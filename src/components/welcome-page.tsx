import React from 'react';
import Welcome1 from './welcome-first';
import Footer from './footer';
import Header from './header';
import Welcome2 from './welcome-sec';
// import usePersonStore from '../zustand/store';

const Welcome: React.FC = () => {

  // const {firstName , lastName} = usePersonStore();

  return (
    <>  
      {/* <h1>{firstName}  {lastName}</h1> */}
      <Header />
      <Welcome1 />
      <Welcome2 />
      <Footer />
    </>
  );
}

export default Welcome;
