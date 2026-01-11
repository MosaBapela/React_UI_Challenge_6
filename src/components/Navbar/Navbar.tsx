import React from 'react';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Text } from '../Text/Text';
import { IconButton } from '../UI/IconButton';
import './Navbar.css';
import mainIconDefault from '../../assets/lettuce.png';
import userIconDefault from '../../assets/user_profile.png';
import cartIconDefault from '../../assets/shopping_cart.png';

type Link = { href: string; label: React.ReactNode; primary?: boolean };
type Props = {
  brandText?: React.ReactNode;
  mainIcon?: string;
  links?: Link[];
  actionIcons?: string[]; // list of icon srcs
  className?: string;
};

const defaultLinks: Link[] = [
  { href: '/#', label: 'HOME', primary: true },
  { href: '/#', label: 'MENU' },
  { href: '/#', label: 'PAGES' },
  { href: '/#', label: 'BLOG' },
  { href: '/#', label: 'CONTACT US' }
];

export const Navbar: React.FC<Props> = ({
  brandText = (<>
    Healthy Fruit Salads<br/>And Juices
  </>),
  mainIcon = mainIconDefault,
  links = defaultLinks,
  actionIcons = [userIconDefault, cartIconDefault],
  className = ''
}) => {
  return (
    <nav className={`navbar ${className}`.trim()}>
      <ContentContainer className="navbar__content">
        <div className="navbar__brand">
          <div className="navbar__icon">
            <img src={mainIcon} alt="Restaurant logo" />
          </div>
          <Text variant="small" className="navbar__brand-text" color="white">
            {brandText}
          </Text>
        </div>

        <div className="navbar__menu">
          <div className="navbar__links">
            {links.map((l, i) => (
              <a key={i} href={l.href} className={`navbar__link ${l.primary ? 'navbar__link--primary' : 'navbar__link--secondary'}`}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            {actionIcons.map((icon, idx) => (
              <IconButton key={idx} src={icon} alt={`action-${idx}`} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};

