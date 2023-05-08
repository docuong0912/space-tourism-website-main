import React from 'react'
import style from '../../styles/scss/main.module.scss';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Technology from '@/component/Technology/Technology';
import Header from '@/component/Header/Header';
const fetcher = (url) => fetch(url).then((res) => res.json());
const Tech = () => {
    const router = useRouter();
    const name = router.query.technologyId;
    const { data, error } = useSWR(`http://localhost:8080/api/v1/technology/${name}`, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <div className={style.technologyContainer}>
      <div className={style.subTech}>the terminology ...</div>
      <span className={`${style.introduction} ${style.technology}`}>
            <p className={style.secondparagraph}>
                {data.name}
            </p>
            <p className={style.thirdparagraph}>
                {data.description}
            </p>
        </span>
    </div>
    
  )
}
Tech.getLayout = function getLayout(page){
    return(
        <div className={style.body}>
            {page}
            <Header active={3}/>
            <Technology/>
            
        </div>
    );
}
export default Tech