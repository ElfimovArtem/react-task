import * as React from 'react';
import './footer-styles.css';

interface FooterPropTypes {
  description: string;
}

export const Footer = (props: FooterPropTypes) => (
  <section className='footer'>
    <p className="footer__description">
      {props.description}
    </p>
  </section>
);
