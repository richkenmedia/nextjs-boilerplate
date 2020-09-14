import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  return (
    <div className="bg-gradient-danger d-flex align-items-center justify-content-center vh-100 flex-column text-white">
      <h1>NEXTJS BOILERPLATE</h1>
      <p>
        <a href="/sign-up" className="text-white">
          Sign-Up
        </a>
        {' | '}
        <a href="/sign-in" className="text-white">
          Sign-In
        </a>
      </p>
    </div>
  );
}
