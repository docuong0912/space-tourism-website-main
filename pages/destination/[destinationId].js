import style from '../../styles/scss/main.module.scss';
import Header from '@/component/Header/Header';
import Destinaion from '@/component/Destinaion/Destinaion';
import Image from 'next/image';
export default function destination({planet}){
    return(
        <div>
        
        <span className={`${style.introduction} ${style.destination}`}>
            <p className={`${style.secondparagraph} ${style.desName}`}>
                {planet.name}
            </p>
            <p className={style.thirdparagraph}>
                {planet.description}
            </p>
            <div className={style.subContainer}>
                <span className={style.subInfo}>
                    <p>avg.distance</p>
                    <p>{planet.distance}</p>
                </span>
                <span className={style.subInfo}>
                    <p>est.travel time</p>
                    <p>{planet.travel}</p>
                </span>
            </div>
        </span>
        <span className={style.desImgContainer}>
            <Image src={planet.images} width={445} height={445} alt="Moon pic"/>
        </span>
    </div>
    );
}
destination.getLayout = function getLayout(page){
    return(
        <div className={` ${style.destinationBg}`}>
            {page}
            <Header active={1}/>
            <Destinaion/>
            
        </div>
    );
}
export async function getStaticPaths(){
    const response = await fetch("https://space-tourism-website-main-data-production.up.railway.app/api/v1/destination");
    const data = await response.json();
    const paths = data.map(des=>({
            
            params:{
                destinationId:`${des.name}`
            }
        
    }));
    return{
        paths,
        fallback:false,
    }
}
export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://space-tourism-website-main-data-production.up.railway.app/api/v1/destination/${params.destinationId}`);
    const data = await response.json();
    return{
        props:{
            planet:data,
        },
    }
}