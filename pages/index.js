import Head from 'next/head'
import Calculator from './Calculator'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function Home() {
  const [quantityData, setQuantity] = useState([{ingredient: "", quantity: 0, cost: 0}]);
    
  const AddQuantity = () =>{
    setQuantity([...quantityData, {ingredient: "", quantity: 0, cost: 0}])
  }

  const Remove = (index) =>{
    const list = [...quantityData]
    list.splice(index, 1)
    setQuantity(list)
  }

  const handleChangeQuantity = (e, index) => {
    const {name, value} = e.target
    const list = [...quantityData]
    list[index][name] = value
    setQuantity(list) 
  }

  const handleChangeCost = (e, index) => {
    const {name, value} = e.target
    const list = [...quantityData]
    list[index][name] = value
    setQuantity(list) 
  }

  const handleChangeIngredient = (e, index) => {
    const {name, value} = e.target
    const list = [...quantityData]
    list[index][name] = value
    setQuantity(list) 
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
        <form>
          {quantityData.map((singleQuantity, index) =>(
            <div key = {index}>
              <input name = "ingredient" type = "text" placeholder='Ingredient' required value = {singleQuantity.ingredient} onChange = {(e) => handleChangeIngredient(e, index )}/>
              <input  type="number" placeholder='quantity'
                      name = "quantity"
                      required value = {singleQuantity.quantity}
                      onChange = {(e) => handleChangeQuantity(e, index )}/>
              <input type="number" placeholder = "cost" name = "cost" required value = {singleQuantity.cost} onChange = {(e) => handleChangeCost(e, index )} />        
              {quantityData.length - 1 === index &&
              <button onClick={AddQuantity}> Add </button> 
               }                                                                      
              <button onClick={ () => Remove(index)}> Remove</button>                                                                      
            </div>
          ))}
        </form>
        <Calculator data = {quantityData}/>
     </main>

    </div>
  )

  
}



