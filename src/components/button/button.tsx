import React from 'react';

type ButtonPropTypes = {
  children: string;
  className: string;
  type: any;
  onClick?: any;
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