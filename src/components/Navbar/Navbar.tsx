import React from 'react'
import { Text } from '../Text/Text'
import styles from './Navbar.module.css'

export const Navbar = () => {

    
  return (
        <nav>
                <div className={styles.content}>
                    <Text variant={'h2'} style={{margin: 0}}>CT Shop</Text>

                    <div className={styles.links}>
                         <a href="/#" className = {styles.link}>HOME</a>
                         <a href="/#" className = {styles.link}>MENU</a>
                         <a href="/#" className = {styles.link}>PAGES</a>
                         <a href="/#" className = {styles.link}>BLOG</a>
                         <a href="/#" className = {styles.link}>CONTACT US</a>
                         

                        <div className={styles['profile-icon']}>
                            <Text variant={'span'}>U</Text>
                        </div>
                        
                        <div className={styles['cart-icon']}>
                            <Text variant={'span'}>C</Text>
                        </div>

                    </div>

                </div>
        </nav>
  )
}
