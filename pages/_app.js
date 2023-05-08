import '@/styles/globals.css'
import Layout from '@/component/shared/Layout';
import Header from '@/component/Header/Header';
import style from '../styles/scss/main.module.scss'
export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>);
  }
  else return (
      <div className={style.body}>
        <Header active={0}/>
        <Component {...pageProps} />
      </div>
        

    
  );
}
