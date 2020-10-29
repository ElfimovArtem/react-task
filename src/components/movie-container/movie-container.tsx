import * as React from 'react';
import './movie-container-styles.css';

interface MovieContainerPropTypes {
  defaultText: string;
}

export const MovieContainer = (props: MovieContainerPropTypes) => (
  <div className='movie-container'>
    <div className='movie-container__bar'/>
    <div className='movie-container__content'>
      <p className='content__default-text'>
        {props.defaultText}
      </p>
    </div>
  </div>
);