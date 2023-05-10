import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/component/shared/Loader';
import style from '../../styles/scss/main.module.scss'; 
const destination = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('destination/Moon');
  },[]);
  return(
    <div className={style.destinationBg}>
      <Loader/>
    </div>
  );
  
}

export default destination;

