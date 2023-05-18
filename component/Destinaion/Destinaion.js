import React, { useState } from 'react';
import style from '../../styles/scss/main.module.scss';
import Image from 'next/image';
import useSWR from 'swr';
import Loader from '../shared/Loader';
const fetcher = (url) => fetch(url).then((res) => res.json());
import Link from 'next/link';
const Destinaion = () => {
    const [planet,setPlanet] = useState(0);
    const { data, error } = useSWR('https://space-tourism-website-main-data-production.up.railway.app/api/v1/destination', fetcher);
    if (error) return <div>failed to load</div>
      if (!data) return <Loader/>
  return (
    <div>
    <div className={style.subheader}><p>01</p> <p>Pick your destination</p></div>
    <div className={style.picker}>
      
          {data.map((des,key)=>{
              return(
                <span className={`${style.planet} ${planet==key?style.active:""}`} onClick={()=>setPlanet(key)} key={des.name}><Link href={`/destination/${des.name}`}>{des.name}</Link></span>
              );
          })}
        </div>
         
    
   
  </div>
  )
}

export default Destinaion