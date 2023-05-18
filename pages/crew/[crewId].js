import React from 'react';
import style from '../../styles/scss/main.module.scss';
import Crew from '@/component/Crew/Crew';
import Header from '@/component/Header/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

const crewInfo = () => {
    const router = useRouter();
    const name = router.query.crewId;
    const { data, error } = useSWR(`https://space-tourism-website-main-data-production.up.railway.app/api/v1/crew/${name}`, fetcher);
    if (error) return <div>failed to load</div>
      if (!data) return <div>loading...</div>
  return (
    <div>
    <div>
        
        <span className={`${style.introduction} ${style.crew}`}>
            <p className={style.firstparagraph}>{data.role}</p>
            <p className={style.secondparagraph}>{data.name}</p>
            <p className={style.thirdparagraph}>{data.bio}</p>
        </span>
        <span className={style.crewImgContainer}>
            <Image src={data.image} width={568} height={612} alt='crew pic'/>
        </span>
    </div>
</div>
  )
}
crewInfo.getLayout = function getLayout(page){
    return(
        <div className={`${style.crewBg}`}>
            {page}
            <Header active={2}/>
            <Crew/>
            
        </div>
    );
}
export default crewInfo