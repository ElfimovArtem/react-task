import React from 'react';

interface ButtonPropTypes {
  children: string;
  className: string;
  type: any;
  onClick?: any;
  id?: string;
}

export const Button = ({ ...rest }: ButtonPropTypes) => (
  <button
    className={rest.className}
    type={rest.type}
    onClick={rest.onClick}
    id={rest.id}
  >
    {rest.children}
  </button>
);