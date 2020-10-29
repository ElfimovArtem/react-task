import * as React from 'react';
import './footer-styles.css';

interface FooterPropTypes {
  description: string;
}

export const Footer = (props: FooterPropTypes) => (
  <footer className='footer'>
    <span className="footer__description">
      {props.description}
    </span>
  </footer>
);
