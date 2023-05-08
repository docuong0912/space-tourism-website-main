import React from 'react';
import Header from '../Header/Header';
import style from '../../styles/scss/main.module.scss'
const Layout = ({children}) => {
  return (
    <div className={style.body}>
        <Header/>
        <main>{children}</main>
    </div>
  )
}


export default Layout;