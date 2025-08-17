import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './SecondContainer.css';
import juice from '../../assets/orange_juice.jpg';

export const SecondContainer: React.FC = () => {
  return (
    <div className="second-container">
      <ContentContainer className="second-container__content">
        <div className="second-container__text">
          <Text variant="h2" className="second-container__title" color="white">
            Orange Benefit
          </Text>
          <Text variant="p" className="second-container__description" color="white">
            Just imagine seeds and summer in gelled<br />sunshine
          </Text>
          <Button variant="primary" size="medium">
            LEARN MORE
          </Button>
        </div>
        
        <div className="second-container__image">
          <img src={juice} alt="Fresh orange juice" />
        </div>
      </ContentContainer>
    </div>
  );
};