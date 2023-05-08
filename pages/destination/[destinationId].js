import style from '../../styles/scss/main.module.scss';
import Header from '@/component/Header/Header';
import Destinaion from '@/component/Destinaion/Destinaion';
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
        <span>
            
        </span>
    </div>
    );
}
destination.getLayout = function getLayout(page){
    return(
        <div className={style.body}>
            {page}
            <Header active={1}/>
            <Destinaion/>
            
        </div>
    );
}
export async function getStaticPaths(){
    const response = await fetch("http://localhost:8080/api/v1/destination");
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
    const response = await fetch(`http://localhost:8080/api/v1/destination/${params.destinationId}`);
    const data = await response.json();
    return{
        props:{
            planet:data,
        },
    }
}