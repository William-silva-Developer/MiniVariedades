
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
          <div className={styles.prime}>
            
            <div className='zoom'>
              <img src={item.image} alt="produto"  />
            </div>
            
              <div className={styles.title}>
                <h3 >{item.title}</h3>
              
                  <p>{item.description}</p>
                  <div className="category">
                    <p className="category">{item.category}</p>
                    <p className="price">R$ {item.price}</p>
                  </div>
                
              </div>
            
          </div>
          
          
          
        
      </div>  
    )
      
    )}
    
   </div>
  )
};

export default Main;
