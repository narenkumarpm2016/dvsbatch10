import Head from 'next/head';
import '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Shahan's playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <h1 className='title'>
          Welcome to <a href="https://github.com/shahan">Shahan's Playground!</a>
        </h1>
      </main>
    </div>
  )
}
