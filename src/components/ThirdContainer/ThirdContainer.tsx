//import React from 'react'
import styles from './ThirdContainer.module.css'
import pic1 from '../../assets/pic_1.jpg'
import pic2 from '../../assets/pic_2.jpg'
import pic3 from '../../assets/pic_3.jpg'



export const ThirdContainer = () => {
  return (
    <div className={styles.mainDiv}>
        
        <div className={styles.innerDiv}>
                <img className={styles.image_3} src={pic1} alt="" />
                <h3>ARCU VOLUT FAT VITAE</h3>
                <p>Phestiers 1geart</p>
        </div>

        <div className={styles.innerDiv}>
                <img className={styles.image_3} src={pic2} alt="" />
                <h3>$19,99,90,99E</h3>
                <p>Orvste past bronps</p>
        </div>

        <div className={styles.innerDiv}>
                <img className={styles.image_3} src={pic3} alt="" />
                <h3>SFIEFLY TUN DPENARD</h3>
                <p>Ongand suniers</p>
        </div>

    </div>
  )
}
