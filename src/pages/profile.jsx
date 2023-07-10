import React from 'react'
import Navi from '../components/navi'
import Footer from '../components/footer'


export default function Profile(props) {
  const {money,setMoney} = props
  const {pay,setPay} = props
  const {pre , setPre} = props
  const {prelist , setPrelist} = props
console.log(prelist)
console.log(pre)
  return (
    
    
    <div className='profile'>
        <Navi   
        pay={pay} setPay={setPay} 
  ></Navi> 
    <div className="profileText">
    <h2>Profile Information</h2>
    <hr />
    <h3>Name:</h3>
    <p>Mustafa</p>
    <h3>Surname:</h3>
    <p>Kanat</p>
    <h3>Adrress:</h3>
    <p>Nilufer/Bursa/Turkiye</p>
    <h3>Mail:</h3>
    <p>mkanat6620@gmail.com</p>
    <h3>Phone:</h3>
    <p>0505 505 07 07</p>
    <h3>Balance:</h3>
    <p> {money} </p>
    <div className="previous">
    <h3>Previous Shopping</h3>
    {prelist.map((productList) => {
       return productList.map((product)=>{  
      
          return <div className='preContainer' key={product.id}>  

          <div className="pre"> {product.isim}  </div>
        
        </div> 
        
        

        })
       
      
    })}
    </div>
    </div>
    
    


    <Footer></Footer>
    </div>
  )
}
