import React from 'react';

interface ButtonPropTypes {
  children: string;
  className: string;
  type: any;
}

export const Button = ({ children, className, type }: ButtonPropTypes) => (
  <button className={className} type={type}>
    {children}
  </button>
);