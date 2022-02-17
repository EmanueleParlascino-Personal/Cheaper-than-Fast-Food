import Head from 'next/head'
import Calculator from './Calculator'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function Home() {
  const [quantityData, setQuantity] = useState([10, 2, 35, 4]);
  const [costs, setCosts] = useState([0.5, 0.8, 0.1, 0.5]);

  function handleSubmit(){
    e.preventDefault();
    setCosts(prevArray =>[...prevArray, parseFloat(e.target.value)])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cheaper than Fast Food?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>
        {`h1 {align: center}`}
      </style>
     <main>

        <input type={'number'} placeholder = {"quantity"} onChange={e => {
          if(!isNaN(e.target.value)){
            setQuantity(prevArray =>[...prevArray, parseFloat(e.target.value)]), 
            console.log(quantityData)}}}/>
        <input type={'number'} placeholder = {"cost"}  onChange={e => setCosts(prevArray =>[...prevArray, parseFloat(e.target.value)])}/>
        <button type="submit" onSubmit={handleSubmit()}>Submit</button>
        <Calculator data = {quantityData} costs = {costs}/>
     </main>

    </div>
  )

  
}



