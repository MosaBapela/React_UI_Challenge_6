import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './FirstContainer.css';

export const FirstContainer: React.FC = () => {
  return (
    <div className="first-container">
      <ContentContainer className="first-container__content">
        <div className="first-container__header">
          <Text variant="p" className="first-container__subtitle" color="white">
            Premium Restaurant
          </Text>
          <Button variant="primary" size="small">
            SIGN UP
          </Button>
        </div>

        <div className="first-container__main">
          <Text variant="h1" className="first-container__title" color="white">
            Anida<br />Dedelay
          </Text>
          <Text variant="p" className="first-container__description" color="white">
            BEST HEALTHY SALAD SERVED<br />IN OUR RESTAURANT
          </Text>
          <Button variant="primary" size="large">
            LEARN MORE
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};