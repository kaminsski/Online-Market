import { useState } from 'react';
import './App.css';
import Main from './pages/main';
import Profile from './pages/profile';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';


const preList = []
const preData = []

const database = 
[
  {isBought : false,  amount:0, id: 1, isim: "Ülker Olala Sufle Kek 70 gr", source: "/images/1.jpeg", stock: 2, price: 10 },
  {isBought : false,  amount:0, id: 2, isim: "İçim Yarım Yağlı Süt 1 L", source: "/images/2.jpeg", stock: 2, price: 6 },
  {isBought : false,  amount:0, id: 3, isim: "Ülker Albeni Karamelli Dolgulu Çikolata 1 kg", source: "/images/3.jpeg", stock: 2, price: 20 },
  {isBought : false,  amount:0, id: 4, isim: "Ülker Pötibör Bisküvi 10 x 450 gr", source: "/images/4.jpeg", stock: 2, price: 5 },
  {isBought : false,  amount:0, id: 5, isim: "Ülker Dankek 8Kek Çikolatalı Çilekli 55 gr 24 Adet", source: "/images/5.jpeg", stock: 2, price: 20 },
  {isBought : false,  amount:0, id: 6, isim: "Ülker Napoliten Çikolata 33Gr x 20 Adet", source: "/images/6.jpeg", stock: 2, price: 12 },
  {isBought : false,  amount:0, id: 7, isim: "Ülker Canpare Çikolata Kremalı 81 gr x 24 Adet", source: "/images/7.jpeg", stock: 2, price: 25 },
  {isBought : false,  amount:0, id: 8, isim: "Ülker Antep Fıstıklı Kare Çikolata 65 gr x 24 Adet", source: "/images/8.jpeg", stock: 2, price: 20 }
  ]

function App() {
  const [data, setData] = useState(database)
  const [money, setMoney] = useState("100")
  const [pay, setPay] = useState("0")
  const [pre, setPre] = useState(preData)
  const [prelist, setPrelist] = useState(preList)
  return (
    <>




       <Routes>
  <Route path='/' element= {<Main 
                                       money={money} setMoney={setMoney}
                                      pay={pay} setPay={setPay} 
                                      pre={pre} setPre={setPre}
                                      data={data} setData={setData}></Main>}>  </Route>
  <Route path='/profile' element= {<Profile 
  
                                      money={money} setMoney={setMoney}
                                      pay={pay} setPay={setPay} 
                                      pre={pre} setPre={setPre}
                                      prelist={prelist} setPrelist={setPrelist}
                                      ></Profile>}>  </Route>
  
  <Route path='/cart' element= {<Cart 
                        
                                      pay={pay} setPay={setPay} 
                                      data={data} setData={setData} 
                                      money={money} setMoney={setMoney}
                                      pre={pre} setPre={setPre}
                                      prelist={prelist} setPrelist={setPrelist}
                                      ></Cart>}>  </Route>


                               
  
      </Routes>
    </>
  );
}

export default App;
