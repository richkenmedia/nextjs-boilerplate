import Head from 'next/head';
import { Button } from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  return (
    <>
      <h1>Home Page</h1>
      <Button color="success">Hello</Button>
    </>
  );
}
