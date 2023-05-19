import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/scss/main.module.scss';
import pic from '../../starter-code/assets/shared/logo.svg'

const Header = ({active}) => {
    useEffect(()=>{
        console.log(active);
        if(active == undefined)active = 0;
    },[])
  return (
    <header className={styles.header}>
        <span className={styles.logo}>
            <Image src={pic} width={48} height={48} alt='logo'/>
        </span>
        <span className={styles.pattern}></span>
        <div className={styles.navLink}>
            <ul>
                <li className={`${styles.navEl} ${active == 0 ? styles.active:""}`}>
                     <Link  href="/">00 Home</Link>
                </li>
                <li className={`${styles.navEl} ${active == 1 ? styles.active:""}`}>
                    <Link href="/destination">01 Destination</Link>
                </li>
                <li className={`${styles.navEl} ${active == 2 ? styles.active:""}`}>
                    <Link href="/crew">02 Crew</Link>
                </li>
                <li className={`${styles.navEl} ${active == 3 ? styles.active:""}`}>
                    <Link href="/technology">03 Technology</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;