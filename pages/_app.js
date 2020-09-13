import React from 'react';
import '../themes/sts/style.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
