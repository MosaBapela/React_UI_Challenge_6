//import React from 'react'
import styles from './FourthContainer.module.css'
import strawberry from '../../assets/strawberries.jpg'

export const FourthContainer = () => {
  return (
    <div className={styles.mainDiv}>
        
        <div className={styles.innerDiv}>
                <h2>Just imagine <br/>seeds and <br/>summer in gell <br/>sunshine</h2>
        </div>

        <div className={styles.innerDiv}>
                <img className={styles.image_4} src={strawberry} alt="picture of strawberrry" />
               
        </div>

        <div className={styles.div_4}>
                <h3 className={styles.header_4}>EBEE WOUS <br/>BENEFIT.</h3>
                <p style={{color:'black'}}>Fruits from the best farms <br/> nice stuff </p>
                <button>HEAD MORE</button>
        </div>

        
    </div>
  )
}
