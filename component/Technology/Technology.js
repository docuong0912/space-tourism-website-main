import React, { useState } from 'react';
import style from '../../styles/scss/main.module.scss';
import Link from 'next/link';
import useSWR from 'swr';
import Loader from '../shared/Loader';
const fetcher = (url) => fetch(url).then((res) => res.json());
const technology = () => {
    const [active,setActive] = useState(0);
    const { data, error } = useSWR('http://localhost:8080/api/v1/technology', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <Loader/>
   
  return (
    <>
    <div>03 space lauch 101</div>
      <span>
        {
          Array.from({length:data.length}).map((b,k)=>{
            return(
              <div key={k} className={style.techbtnContainer}>
                
                <Link href={`/technology/${data[k].name}`}> <button className={`${style.techBtn} ${active == k?style.active:""}`} onClick={()=>setActive(k)} >{k+1}</button></Link>
              </div>
              
            );
          })
        }
      </span>
   
    
    

</>

  )
}

export default technology;