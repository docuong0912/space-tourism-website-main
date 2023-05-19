import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import style from '../../styles/scss/main.module.scss';
import { useRouter } from 'next/router';
const home = () => {
   const router = useRouter();
  return (
    <>
        <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className={style.introduction}>
                <p className={style.firstparagraph}>so, you want to travel to</p>
                <p className={style.secondparagraph}>space</p>
                <p className={style.thirdparagraph}>, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <button onClick={()=>{router.push('/destination')}} className={style.btnHome} >
                <p>explore! </p> 
            </button>
        </main>
    </>
  )
}

export default home;