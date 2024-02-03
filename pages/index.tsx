import Head from 'next/head';
import Layout from '../components/layout/layout';
// import styles from '../styles/home.module.scss';
import React from 'react';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <Layout>
       <Head>
        <title>Scribe - Strona główna</title>
      </Head>
      <Navbar></Navbar>
    </Layout>
  );
}
