import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import './ThirdContainer.css';
import pic1 from '../../assets/pic_1.jpg';
import pic2 from '../../assets/pic_2.jpg';
import pic3 from '../../assets/pic_3.jpg';
import { Card } from '../UI/Card';

type Item = {
  img?: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

type Props = {
  items?: Item[];
  className?: string;
};

const defaultItems: Item[] = [
  { img: pic1, title: 'ARCU VOLUT FAT VITAE', description: 'Phestiers 1geart' },
  { img: pic2, title: '$19,99,90,99E', description: 'Orvste past bronps' },
  { img: pic3, title: 'SFIEFLY TUN DPENARD', description: 'Ongand suniers' }
];

export const ThirdContainer: React.FC<Props> = ({ items = defaultItems, className = '' }) => {
  return (
    <div className={`third-container ${className}`.trim()}>
      <ContentContainer className="third-container__content">
        <div className="third-container__grid">
          {items.map((it, idx) => (
            <Card
              key={idx}
              img={it.img}
              imgAlt={typeof it.title === 'string' ? it.title : `item-${idx}`}
              title={it.title}
              description={it.description}
              cardClass="third-container__item"
              titleClass="third-container__item-title"
              descriptionClass="third-container__item-description"
            />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};