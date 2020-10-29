import * as React from 'react';
import { InputForm } from '../input-form';
import './header-styles.css';

interface HeaderPropTypes {
  headerTitle: string;
}

export const Header = (props: HeaderPropTypes) => (
  <header className='header'>
    <div className='header-substrate' />
    <div className='header-content'>
      <p className='header-content__title'>
      {props.headerTitle}
    </p>
      <InputForm />
    </div>
  </header>
);