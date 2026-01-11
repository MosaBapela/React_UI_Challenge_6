import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import './Footer.css';
import berriesDefault from '../../assets/berries_in_bowl.jpg';
import meat from '../../assets/steak.png';
import apple from '../../assets/apple.png';
import cup from '../../assets/paper-cup.png';

type Feature = { img?: string; title: React.ReactNode };
type Props = {
  heroImage?: string;
  features?: Feature[];
  hours?: React.ReactNode[];
  className?: string;
};

const defaultFeatures: Feature[] = [
  { img: meat, title: 'FRESH' },
  { img: apple, title: 'VITAMIN' },
  { img: cup, title: 'ORGANIC' }
];

const defaultHours = [
  'Monday 17:00 - 24:00',
  'Tuesday 13:00 - 24:00',
  'Wednesday 19:00 - 23:00',
  'Thursday 17:00 - 23:00'
];

export const Footer: React.FC<Props> = ({
  heroImage,
  features = defaultFeatures,
  hours = defaultHours,
  className = ''
}) => {
  const hero = heroImage || berriesDefault;

  return (
    <footer className={`footer ${className}`.trim()}>
      <ContentContainer className="footer__content">
        <div className="footer__main">
          <div className="footer__hero-image">
            <img src={hero} alt="Hero visual" />
          </div>

          <div className="footer__features">
            {features.map((f, i) => (
              <div key={i} className="footer__feature">
                {f.img && <img src={f.img} alt={typeof f.title === 'string' ? f.title : `feature-${i}`} />}
                <Text variant="h5" className="footer__feature-title" color="white">
                  {f.title}
                </Text>
              </div>
            ))}
          </div>

          <div className="footer__hours">
            <Text variant="h5" className="footer__hours-title" color="white">
              OPENING HOURS
            </Text>
            <ul className="footer__hours-list">
              {hours.map((h, idx) => (
                <li key={idx}>
                  <Text variant="small" color="white">{h}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
};