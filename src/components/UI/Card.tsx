import React from 'react';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

type Props = {
  img?: string;
  imgAlt?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  cardClass?: string;
  imgClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  buttonClass?: string;
  titleVariant?: Parameters<typeof Text>[0]['variant'];
  descriptionVariant?: Parameters<typeof Text>[0]['variant'];
  titleColor?: Parameters<typeof Text>[0]['color'];
  descriptionColor?: Parameters<typeof Text>[0]['color'];
};

export const Card: React.FC<Props> = ({
  img,
  imgAlt = '',
  title,
  description,
  buttonLabel,
  cardClass = '',
  imgClass = '',
  titleClass = '',
  descriptionClass = '',
  buttonClass = '',
  titleVariant = 'h3',
  descriptionVariant = 'p'
  ,
  titleColor,
  descriptionColor
}) => {
  return (
    <div className={cardClass}>
      {img && <img src={img} alt={imgAlt} className={imgClass} />}
      {title && (
        <Text variant={titleVariant} className={titleClass} color={titleColor}>
          {title}
        </Text>
      )}
      {description && (
        <Text variant={descriptionVariant} className={descriptionClass} color={descriptionColor}>
          {description}
        </Text>
      )}
      {buttonLabel && (
        <div className={buttonClass}>
          <Button>{buttonLabel}</Button>
        </div>
      )}
    </div>
  );
};

export default Card;
