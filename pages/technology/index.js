import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/component/shared/Loader';
import style from '../../styles/scss/main.module.scss'; 
const technology = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/technology/lauch%20vehicle");
  },[]);
  return (
    <div className={style.techBg}>
      <Loader/>
    </div>
  );
}

export default technology