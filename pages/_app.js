import React from 'react';
import '../themse/custom/style.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sample Next Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
