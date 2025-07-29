import React from 'react'
import { Text } from '../Text/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer'
import mainIcon from '../../assets/lettuce.png'
import userIcon from '../../assets/user_profile.png'
import cartIcon from '../../assets/shopping_cart.png'

export const Navbar = () => {

    
  return (
        <nav>
                {/*<div className={styles.content}>*/}

                <ContentContainer className={styles.content}>
                {/*<Text variant={'h2'} style={{margin: 0}}>Healthy Fruit Salads <br/>And Juices</Text>*/}
                
                <div className={styles.mainIconDiv}>
                    <div className={styles.imageDiv}>
                        <img src= {mainIcon} alt="main Icon picture"/>  {/*<img src= {mainIcon} alt="main Icon picture"/>*/}
                    </div>
                    <p style={{fontSize : 10}}>Healthy Fruit Salads <br/>And Juices</p>

                </div>

                <div className={styles.links}>
                    <a href="/#" className = {styles.link}>HOME</a>
                    <a href="/#" className = {styles.link}>MENU</a>
                    <a href="/#" className = {styles.link}>PAGES</a>
                    <a href="/#" className = {styles.link}>BLOG</a>
                    <a href="/#" className = {styles.link}>CONTACT US</a>
                    

                    <div className={styles['profile-icon']}>
                        <img className={styles.image} src={userIcon} alt="user icon for users"/>
                    </div>
                    
                    <div className={styles['cart-icon']}>
                         <img className={styles.image} src={cartIcon} alt="cart icon for cart"/>
                    </div>

                </div>
                    
                </ContentContainer>

                    

                {/*</div>*/}
        </nav>
  )
}
