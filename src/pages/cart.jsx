import Navi from '../components/navi'
import Footer from '../components/footer'

import React from 'react'


export default function Cart(props) {
  const {money,setMoney} = props
  const {data , setData} = props
  const {pay , setPay} = props
  const {pre , setPre} = props
  const {prelist , setPrelist} = props

  const buy=() => {
    setMoney(Number(money)-Number(pay))
    setPay("0")
    
    let preCopy = [...pre]
    prelist.push(preCopy)
    setPre ([])
    data.map((product)=>{
      if (product.amount != 0){
        product.amount = 0
       


      }

    })
    setData([...data])
    alert("Alisverisiniz tamamlandi")
  
  }
  return (
    <div>
         <Navi   
        pay={pay} setPay={setPay} 
  ></Navi> 
    
    <div className="cartContainer">
     
      <div className="cartProductsContainer">
      <div className="cartTitle">
      <h2>Product</h2>
      <h2>Amount</h2>
      <h2>Payment</h2>
      
      
      </div>
      <hr />
      <hr />
         {data.map((product) => {
          if(product.amount !=0){
          return <div className='cartProduct' key={product.id}>
            
             <div className='cartImg'><img src={ product.source} alt={product.isim} />
             <p>{product.isim}</p>
             
             </div>
             
            <div className="cartProductNumber">
             {product.amount}
            </div>

            <div className="cartProductNumber">
             {Number(product.price) * Number(product.amount)}
            </div>

          </div>}

         })}
      </div>
      <div className="payment">
        <h3>Balance</h3>
        <p> {money} </p>
        <h3>Payment</h3>
        <p> {pay} </p>
        <h3>Remaining balance</h3>
        <p>{Number(money)-Number(pay) }</p>
        <button onClick={buy}>Confirm</button>

      </div>
    </div>

    <Footer></Footer>
    </div>
  )
}
