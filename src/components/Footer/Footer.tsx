import styles from './Footer.module.css'
import berries from '../../assets/berries_in_bowl.jpg'
import meat from '../../assets/steak.png'
import apple from '../../assets/apple.png'
import cup from '../../assets/paper-cup.png'


export const Footer = () => {
  return (
    <footer>  
            <div className={styles.mainDivs}>

              <div className={styles.divs_1}>
                <img className={styles.berry} src={berries} alt="berries in a bowl" />
              </div>

              <div className={styles.divs_2}>
                <div  className={styles.divs_2_1}>
                      <img src={meat} alt="fresh steak" />
                      <h5>FRESH</h5>
                      
                </div>

                <div  className={styles.divs_2_1}>
                      <img src={apple} alt="fresh steak" />
                      <h5>VITAMIN</h5>
                      
                </div>

                <div  className={styles.divs_2_1}>
                     <img src={cup} alt="fresh steak" />
                      <h5>ORE ANIC</h5>
                      
                </div>
              </div>

              <div className={styles.divs_3}>
                <h5>OPENING HOURS</h5>
                <ul>
                  <li>Monday 17.00 cm * 12</li>
                  <li>Tuesday 13.60 cm * 12</li>
                  <li>Wednesday 19.00 cm * 11</li>
                  <li>Thursday 17:00 cm * 11</li>
                </ul>
              </div>

            </div>
    </footer>
  )
}
