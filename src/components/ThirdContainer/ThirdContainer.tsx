import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import './ThirdContainer.css';
import pic1 from '../../assets/pic_1.jpg';
import pic2 from '../../assets/pic_2.jpg';
import pic3 from '../../assets/pic_3.jpg';

export const ThirdContainer: React.FC = () => {
  return (
    <div className="third-container">
      <ContentContainer className="third-container__content">
        <div className="third-container__grid">
          <div className="third-container__item">
            <img src={pic1} alt="Fresh fruit" />
            <Text variant="h3" className="third-container__item-title" color="white">
              ARCU VOLUT FAT VITAE
            </Text>
            <Text variant="p" className="third-container__item-description" color="white">
              Phestiers 1geart
            </Text>
          </div>

          <div className="third-container__item">
            <img src={pic2} alt="Fresh fruit" />
            <Text variant="h3" className="third-container__item-title" color="white">
              $19,99,90,99E
            </Text>
            <Text variant="p" className="third-container__item-description" color="white">
              Orvste past bronps
            </Text>
          </div>

          <div className="third-container__item">
            <img src={pic3} alt="Fresh fruit" />
            <Text variant="h3" className="third-container__item-title" color="white">
              SFIEFLY TUN DPENARD
            </Text>
            <Text variant="p" className="third-container__item-description" color="white">
              Ongand suniers
            </Text>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};