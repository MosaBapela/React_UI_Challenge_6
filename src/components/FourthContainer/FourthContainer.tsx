import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './FourthContainer.css';
import strawberry from '../../assets/strawberries.jpg';

export const FourthContainer: React.FC = () => {
  return (
    <div className="fourth-container">
      <ContentContainer className="fourth-container__content">
        <div className="fourth-container__text">
          <Text variant="h2" className="fourth-container__title" color="white">
            Just imagine<br />
            seeds and<br />
            summer in gell<br />
            sunshine.
          </Text>
        </div>

        <div className="fourth-container__image">
          <img src={strawberry} alt="Fresh strawberries" />
        </div>

        <div className="fourth-container__card">
          <Text variant="h3" className="fourth-container__card-title" color="black">
            EBEE WOUS<br />
            BENEFIT.
          </Text>
          <Text variant="p" className="fourth-container__card-description" color="black">
            Fruits from the best farms<br />
            nice stuff
          </Text>
          <Button variant="secondary" size="medium">
            READ MORE
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};