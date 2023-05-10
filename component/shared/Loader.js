import React from 'react'
import style from '../../styles/scss/main.module.scss';
const Loader = () => {
  return (
    <div className={`${style.center} `}>
         <div className={style.ring}></div>
         <span className={style.loading}>loading...</span>
      </div>
  )
}

export default Loader