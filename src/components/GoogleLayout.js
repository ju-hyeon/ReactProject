import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body/Body'

const GoogleLayout = () => {
  return (

    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-end-7 mb-8">
        <Header />
      </div>

      <div className="flex justify-center items-center col-start-2 col-span-4 mt-8">
        <Body />
      </div>

      <div className="col-start-1 col-end-7 ...">
        <Footer />
      </div>

    </div>

  );
};


export default GoogleLayout;