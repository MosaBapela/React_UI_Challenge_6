import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import './Navbar.css';
import mainIcon from '../../assets/lettuce.png';
import userIcon from '../../assets/user_profile.png';
import cartIcon from '../../assets/shopping_cart.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ContentContainer className="navbar__content">
        <div className="navbar__brand">
          <div className="navbar__icon">
            <img src={mainIcon} alt="Restaurant logo" />
          </div>
          <Text variant="small" className="navbar__brand-text" color="white">
            Healthy Fruit Salads<br />
            And Juices
          </Text>
        </div>

        <div className="navbar__menu">
          <div className="navbar__links">
            <a href="/#" className="navbar__link navbar__link--primary">HOME</a>
            <a href="/#" className="navbar__link navbar__link--secondary">MENU</a>
            <a href="/#" className="navbar__link navbar__link--secondary">PAGES</a>
            <a href="/#" className="navbar__link navbar__link--secondary">BLOG</a>
            <a href="/#" className="navbar__link navbar__link--secondary">CONTACT US</a>
          </div>

          <div className="navbar__actions">
            <div className="navbar__action-btn">
              <img src={userIcon} alt="User profile" />
            </div>
            <div className="navbar__action-btn">
              <img src={cartIcon} alt="Shopping cart" />
            </div>
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};