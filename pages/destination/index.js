import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const destination = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('destination/Moon');
  },[]);
}

export default destination;

