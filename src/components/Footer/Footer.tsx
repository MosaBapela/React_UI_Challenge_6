import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import './Footer.css';
import berries from '../../assets/berries_in_bowl.jpg';
import meat from '../../assets/steak.png';
import apple from '../../assets/apple.png';
import cup from '../../assets/paper-cup.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ContentContainer className="footer__content">
        <div className="footer__main">
          <div className="footer__hero-image">
            <img src={berries} alt="Fresh berries in a bowl" />
          </div>

          <div className="footer__features">
            <div className="footer__feature">
              <img src={meat} alt="Fresh ingredients" />
              <Text variant="h5" className="footer__feature-title" color="white">
                FRESH
              </Text>
            </div>

            <div className="footer__feature">
              <img src={apple} alt="Vitamin rich" />
              <Text variant="h5" className="footer__feature-title" color="white">
                VITAMIN
              </Text>
            </div>

            <div className="footer__feature">
              <img src={cup} alt="Organic products" />
              <Text variant="h5" className="footer__feature-title" color="white">
                ORGANIC
              </Text>
            </div>
          </div>

          <div className="footer__hours">
            <Text variant="h5" className="footer__hours-title" color="white">
              OPENING HOURS
            </Text>
            <ul className="footer__hours-list">
              <li>
                <Text variant="small" color="white">Monday 17:00 - 24:00</Text>
              </li>
              <li>
                <Text variant="small" color="white">Tuesday 13:00 - 24:00</Text>
              </li>
              <li>
                <Text variant="small" color="white">Wednesday 19:00 - 23:00</Text>
              </li>
              <li>
                <Text variant="small" color="white">Thursday 17:00 - 23:00</Text>
              </li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
};