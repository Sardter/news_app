import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Script from 'next/script';
import BaseLayout from '../components/base_layout';
import NavBar from '../components/navbar';


export default function Home() {
  return (
    <BaseLayout> 
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin='anonymous'></Script>
      <NavBar></NavBar>
      <h1> Home </h1>
      <h2> <Link href={"/profile"}> Profile </Link> </h2>
      <h2> <Link href={"/login"}> Login </Link> </h2>
      <h2> <Link href={"/logout"}> Logout </Link> </h2>
      <h2> <Link href={"/about"}> About </Link> </h2>
      <h2> <Link href={"/create_post"}> Create Post </Link> </h2>
    </BaseLayout>
  )
}
