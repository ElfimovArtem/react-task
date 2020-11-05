import * as React from 'react';
import './footer-styles.css';

type FooterPropTypes = {
  description: string;
}

export const Footer: React.FC<FooterPropTypes> = ({ description }) => (
  <footer className='footer'>
    <span className="footer__description">
      {description}
    </span>
  </footer>
);
