import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const technology = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/technology/lauch%20vehicle");
  },[])
}

export default technology