import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './FourthContainer.css';
import strawberryDefault from '../../assets/strawberries.jpg';

type Props = {
  title?: React.ReactNode;
  imageSrc?: string;
  cardTitle?: React.ReactNode;
  cardDescription?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  className?: string;
};

export const FourthContainer: React.FC<Props> = ({
  title = (<>
    Just imagine<br/>
    seeds and<br/>
    summer in gell<br/>
    sunshine.
  </>),
  imageSrc,
  cardTitle = (<>
    EBEE WOUS<br/>
    BENEFIT.
  </>),
  cardDescription = (<>
    Fruits from the best farms<br/>
    nice stuff
  </>),
  buttonLabel = 'READ MORE',
  className = ''
}) => {
  const img = imageSrc || strawberryDefault;

  return (
    <div className={`fourth-container ${className}`.trim()}>
      <ContentContainer className="fourth-container__content">
        <div className="fourth-container__text">
          <Text variant="h2" className="fourth-container__title" color="white">
            {title}
          </Text>
        </div>

        <div className="fourth-container__image">
          <img src={img} alt="Fourth container visual" />
        </div>

        <div className="fourth-container__card">
          <Text variant="h3" className="fourth-container__card-title" color="black">
            {cardTitle}
          </Text>
          <Text variant="p" className="fourth-container__card-description" color="black">
            {cardDescription}
          </Text>
          <Button variant="secondary" size="medium">
            {buttonLabel}
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};