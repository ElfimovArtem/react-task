import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addYourMovie } from '../../constants';
import { Button } from '../button';
import './add-movie-form-styles.css';

export const AddMovieForm = () => {
  return (
    <Formik
      initialValues = {
        {
          Title: '',
          Type: '',
          Poster: '',
          Year: '',
          imdbID: ''
        }
      }
      validationSchema={
        Yup.object({
          // text: Yup.string()
          //   .max(20, 'Must be 20 characters or less')
          //   .min(3, 'Must be at least 3 characters long')
          //   .required('This is a required field...')
        })
      }
      onSubmit={
        (values, { setFieldValue }) => {
          console.log(values.Title);
          setFieldValue('Title', ''); //Очистит поле после отправки
        }
      }
    >
      <Form className='add-movie-form'>
        <label className='add-movie-form__label' htmlFor='Title'>{addYourMovie}</label>
        <Field
          className='add-movie-form__input-title'
          autoComplete="off"
          name='Title'
          type='text'
        />
        <Field
          className='add-movie-form__input-Type'
          autoComplete="off"
          name='Type'
          type='text'
        />
        <Field
          className='add-movie-form__input-Poster'
          autoComplete="off"
          name='Poster'
          type='text'
        />
        <Field
          className='add-movie-form__input-Year'
          autoComplete="off"
          name='Year'
          type='text'
        />
        <Field
          className='add-movie-form__input-imdbID'
          autoComplete="off"
          name='imdbID'
          type='text'
        />
        {/*<ErrorMessage name='text'>*/}
        {/*  {*/}
        {/*    msg => (*/}
        {/*      <div className='error-validation'>*/}
        {/*        {msg}*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*  }*/}
        {/*</ErrorMessage>*/}
        <div className='add-movie-form__submit'>
          <div className='add-movie-form__submit-container'>
            <Button
              type='submit'
              className='add-movie-form__add-btn'
            >{addYourMovie}</Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}