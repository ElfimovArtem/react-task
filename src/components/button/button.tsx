import React, { MouseEvent } from 'react';

type ButtonPropTypes = {
  children: string;
  className: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (ev?: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

export const Button:React.FC<ButtonPropTypes> = ({
                                                   className,
                                                   type,
                                                   onClick,
                                                   id ,
                                                   children}) => (
  <button
    className={className}
    type={type}
    onClick={onClick}
    id={id}
  >
    {children}
  </button>
);