import React from 'react';

// importing default bootstrap styles
import '../themes/custom/style.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
