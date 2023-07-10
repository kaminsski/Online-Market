import React from 'react'
import Navi from '../components/navi'
import Footer from '../components/footer'


export default function Main(props) {
    const {data , setData} = props
    const {pay , setPay} = props
    const {money , setMoney} = props
    const {pre , setPre} = props


    const increase = (productId) => {
      data.find((product) => {
        if (product.id === productId){
          
          
          let lastPay=Number(pay)+(Number(product.price))
          if(Number(money) < Number(lastPay)){
            window.alert("Yetersiz bakiye")
          }else{
          product.amount +=1
          setPay(lastPay)
          setData([...data])
          if (!pre.includes(product)){
           
            pre.push(product)
            setPre([...pre])
            

          }
        }
         
            
        }
      })
    }

    const decrease = (productId) => {
      data.find((f) => {
        if (f.id === productId){
          
          if (f.amount == 0){
            return
          }else{
            f.amount -=1
          let lastPay=Number(pay)-(Number(f.price))
          setPay(lastPay)
          setData([...data])}
        }
      })
    }



  return (
    <div>
    <Navi   
        pay={pay} setPay={setPay} 
  ></Navi> 
    
    <div className="container">
        {data.map((product) =>{
            return <div className='productContainer' key={product.id}> 
                        <div className='productImg'><img src={ product.source} alt={product.isim} /></div>
                        <div className='productName'><span> Name: </span>{product.isim}</div> 
                        <div className='productPrice'><span> Price: </span>{product.price} <span id='usd'>$</span></div> 
                        <div className="amountContainer">
                        <div className="amount">
                          <div  onClick={() => { return decrease(product.id)}} className="minus">-</div>
                          <div className="number"> {product.amount} </div>
                          <div onClick={() => { return increase(product.id)}} className="plus">+</div>
                          </div>
                        </div>
            
            
            </div>





        })}
    </div>


        <Footer></Footer>
    </div>
  )
}

