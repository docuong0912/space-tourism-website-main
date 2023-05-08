import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const crew = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/crew/1");
  },[])
   
 
}

export default crew;