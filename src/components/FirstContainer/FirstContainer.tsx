import styles from './FirstContainer.module.css'


export const FirstContainer = () => {
  return (
    <div className={styles.mainDev}> 
    
        <div className={styles.firstLine}>
            <p>Premeium Resturant</p>
            <button className={styles.button1}>Sign up</button>
        </div>

        <div>
            <h1>Anida <br/>Dedelay</h1>
            <p>BEST HEALTHY SALAD SERVED <br/>IN OUR RESTURANT</p>
            <button className={styles.button1}>LEARN MORE</button>
        </div>
       
    </div>

  )
}
