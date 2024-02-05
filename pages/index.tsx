import Head from 'next/head';
import Layout from '../components/layout/layout';
// import styles from '../styles/home.module.scss';
import React from 'react';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Section from '../components/section';
import SectionButton from '../components/sectionbutton';

export default function Home() {
  return (
    <Layout>
       <Head>
        <title>Scribe - Strona główna</title>
      </Head>
      <Navbar></Navbar>
      <Main children={<>
        <Section SectionIcon='schedule' SectionHeading='Ostatnio' children={<>
          <p>Brak ostatnio utworzonych notatek lub list zadań.</p>
        </>}></Section>
        <Section SectionIcon='bolt' SectionHeading='Szybkie akcje' children={<>
          <div className='row'>
          <SectionButton icon="add_notes" label="Nowa notatka"></SectionButton>
          <SectionButton icon="add_box" label="Nowa lista zadań"></SectionButton>
          <SectionButton icon="person_add" label="Nowy zespół"></SectionButton>
          </div>
        </>}></Section>
      </>}></Main>
    </Layout>
  );
}
