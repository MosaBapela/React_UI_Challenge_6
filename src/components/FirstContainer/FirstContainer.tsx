import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import './FirstContainer.css';

type Props = {
  subtitle?: React.ReactNode;
  signupLabel?: React.ReactNode;
  mainTitle?: React.ReactNode;
  description?: React.ReactNode;
  learnMoreLabel?: React.ReactNode;
  className?: string;
};

export const FirstContainer: React.FC<Props> = ({
  subtitle = 'Premium Restaurant',
  signupLabel = 'SIGN UP',
  mainTitle = (<>
    Anida<br/>Dedelay
  </>),
  description = (<>
    BEST HEALTHY SALAD SERVED<br/>IN OUR RESTAURANT
  </>),
  learnMoreLabel = 'LEARN MORE',
  className = ''
}) => {
  return (
    <div className={`first-container ${className}`.trim()}>
      <ContentContainer className="first-container__content">
        <div className="first-container__header">
          <Text variant="p" className="first-container__subtitle" color="white">
            {subtitle}
          </Text>
          <Button variant="primary" size="small">
            {signupLabel}
          </Button>
        </div>

        <div className="first-container__main">
          <Text variant="h1" className="first-container__title" color="white">
            {mainTitle}
          </Text>
          <Text variant="p" className="first-container__description" color="white">
            {description}
          </Text>
          <Button variant="primary" size="large">
            {learnMoreLabel}
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};