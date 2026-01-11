import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './SecondContainer.css';
import juiceDefault from '../../assets/orange_juice.jpg';

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  imageSrc?: string;
  className?: string;
};

export const SecondContainer: React.FC<Props> = ({
  title = 'Orange Benefit',
  description = (<>
    Just imagine seeds and summer in gelled<br/>sunshine
  </>),
  buttonLabel = 'LEARN MORE',
  imageSrc,
  className = ''
}) => {
  const img = imageSrc || juiceDefault;

  return (
    <div className={`second-container ${className}`.trim()}>
      <ContentContainer className="second-container__content">
        <div className="second-container__text">
          <Text variant="h2" className="second-container__title" color="white">
            {title}
          </Text>
          <Text variant="p" className="second-container__description" color="white">
            {description}
          </Text>
          <Button variant="primary" size="medium">
            {buttonLabel}
          </Button>
        </div>
        
        <div className="second-container__image">
          <img src={img} alt="Second container visual" />
        </div>
      </ContentContainer>
    </div>
  );
};