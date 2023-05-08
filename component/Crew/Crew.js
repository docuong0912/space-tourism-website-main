import React from 'react'
import style from '../../styles/scss/main.module.scss';
import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../shared/Loader';

const fetcher = (url) => fetch(url).then((res) => res.json());
const Crew = () => {
  const router = useRouter();
  const { data, error } = useSWR('http://localhost:8080/api/v1/crew', fetcher);
  const [crew,setCrew] = useState(0);
  if (error) return <div>failed to load</div>
    if (!data) return <Loader/>
  const handleClick=(key)=>{
    setCrew(key);
    router.push(`/crew/${key+1}`)
  }
  return (
    
     <div>
     <div className={style.subheader}>
       <p>02</p> <p>meet your crew</p>
     </div>
     <div className={style.btnCrewContainer}>
     {
       Array.from({length:data.length}).map((button,key)=>{
         return (
           <div className={`${style.btnCrew} ${crew==key?style.active:""}`} onClick={()=>handleClick(key)} key={key}>
               
           </div>
         );
       })
     }
     </div>
    
   </div>
  )
}

export default Crew