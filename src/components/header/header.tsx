import * as React from 'react';
import { InputForm } from '../input-form';
import { MovieDescription } from '../movie-description';
import './header-styles.css';

type HeaderPropTypes = {
  headerTitle: string;
  fullSize?: boolean;
  title?: string;
  poster?: string;
  year?: string;
}

export const Header: React.FC<HeaderPropTypes> = ({
                                                    headerTitle,
                                                    fullSize,
                                                    title,
                                                    poster,
                                                    year
                                                  }) => (
  <header className={(!fullSize) ? 'header' : 'header--full-size'}>
    <div className={(!fullSize) ? 'header-substrate' : 'header-substrate--full-size'} />
    <div className={(!fullSize) ? 'header-content' : 'header-content--full-size'}>
      <p className='header-content__title'>
        {headerTitle}
      </p>
      {
        (!fullSize) ?
          <InputForm/> :
          <MovieDescription
            title={title}
            poster={poster}
            year={year}
          />
      }
    </div>
  </header>
);