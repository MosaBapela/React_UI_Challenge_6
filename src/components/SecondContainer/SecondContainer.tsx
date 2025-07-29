//import React from 'react'
import styles from './SecondContainer.module.css'
import juice from '../../assets/orange_juice.jpg'

export const SecondContainer = () => {
  return (
    <div className ={styles.mainDiv}>
            
            <div>
              <h2>Orange Benefit</h2>
              <p>Just reogine eseds and summer in golled <br/>quasium</p>
              <button>LEARN MORE</button>
            </div>
            
            <div>
                <img className={styles.image} src={juice} alt="" />
            </div>
            
    </div>
  )
}
