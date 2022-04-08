import Head from 'next/head'
import Calculator from './Calculator'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'


export default function Home() {
  const [quantityData, setQuantity] = useState([{ingredient: "", quantity: 0, cost: 0}]);
    
  const AddQuantity = () =>{
    setQuantity([...quantityData, {ingredient: "", quantity: 0, cost: 0}])
  }
  /* Start to look into an API to get a stand in value for products*/
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
    console.log(JSON.parse(localStorage.getItem('data'))) 
  }

  const handleChangeIngredient = (e, index) => {
    const {name, value} = e.target
    const list = [...quantityData]
    list[index][name] = value
    setQuantity(list) 
  }
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(quantityData));
  }, [quantityData]);

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
        <div className='input-container'>
          {quantityData.map((singleQuantity, index) =>(
            <div key = {index} className = "inputs">
              <div className = "row">
                <span>
                  <input name = "ingredient" type = "text" className="basic-slide" id="name" placeholder='Banana' required value = {singleQuantity.ingredient} onChange = {(e) => handleChangeIngredient(e, index )}/><label htmlFor="name">Name</label>
                </span>
                <span>
                  <input  type="number" placeholder='xg'
                          name = "quantity" className="gate" id="class"
                          required value = {singleQuantity.quantity}
                          onChange = {(e) => handleChangeQuantity(e, index )}/> <label htmlFor="name">Quantity</label>
                </span>
                <span>        
                  <input type="number" className="skinny" id="english" placeholder = "cost" name = "cost" required value = {singleQuantity.cost} onChange = {(e) => handleChangeCost(e, index )} /><label htmlFor="name">Cost</label>
                </span>     
                {quantityData.length - 1 === index &&
                <button onClick={AddQuantity}> Add </button> 
                }                                                                      
                <button onClick={ () => Remove(index)}> Remove</button>
              </div>                                                                      
            </div>
          ))}
        </div>
        <Calculator data = {quantityData}/>
     </main>

    </div>
  )

  
}



/*https://developer.walmart.com/api/us/mp/items#operation/getSearchResult <- THIS IS KEY 

https://www.youtube.com/watch?v=VQraviuwbzU

Recipe                  Resources

Ingredients Amount  |    Cost   Amount

XXXX        100g          2£     1kg

Features Ideas:
Extract data from a recipe
find recipe with a list of ingredients
Have an online inventory of all your groceries
Nutrional value calculator for dishes
*/