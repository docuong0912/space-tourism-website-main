import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/component/shared/Loader';
import style from '../../styles/scss/main.module.scss';
const crew = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/crew/1");
  },[])
  return (
    <div className={style.crewBg}>
      <Loader/>
    </div>
  );
 
}

export default crew;