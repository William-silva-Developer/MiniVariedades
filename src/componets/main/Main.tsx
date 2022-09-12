
import styles from './Main.module.css';

import {useEffect, useState} from 'react';


import axios from 'axios';
import  Products  from '../Models/Products';
 const Main = () => {

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products`)
     .then(response => setProducts(response.data));
    
  },[]);
  
  
  
  





  return (
   <div className={styles.main}>
    
    
    {products.map(item => (
      <div className={styles.main}>
          <div className={styles.image}>
            <img src={item.image} alt="" width={200} height={200} />
            <div className={styles.title}>
              <h2 >{item.title}</h2>
            </div>
            
          </div>
          
          
          
        
      </div>  
    )
      
    )}
    
   </div>
  )
};

export default Main;
