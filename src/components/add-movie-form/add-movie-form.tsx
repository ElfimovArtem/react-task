import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addYourMovie } from '../../constants';
import { Button } from '../button';
import { homeBtnClick } from '../../redux/adding-movie/actions';
import './add-movie-form-styles.css';

const defaultSchema = Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required');

const AddMovieSchema = Yup.object().shape({
  Title: defaultSchema,
  Type: defaultSchema,
  Poster: defaultSchema,
  Year: defaultSchema,
  imdbID: defaultSchema
});

export const AddMovieForm = () => {
  const put = useDispatch();

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
      validationSchema = {AddMovieSchema}
      onSubmit = {
        (values, { setFieldValue }) => {
          console.log(values.Title);
          setFieldValue('Title', '');
          setFieldValue('Type', '');
          setFieldValue('Poster', '');
          setFieldValue('Year', '');
          setFieldValue('imdbID', '');
          put(homeBtnClick());
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
          placeholder='Enter title'
        />
        <Field
          className='add-movie-form__input-Type'
          autoComplete="off"
          name='Type'
          type='text'
          placeholder='Enter type'
        />
        <Field
          className='add-movie-form__input-Poster'
          autoComplete="off"
          name='Poster'
          type='text'
          placeholder='Enter poster URL'
        />
        <Field
          className='add-movie-form__input-Year'
          autoComplete="off"
          name='Year'
          type='text'
          placeholder='Enter films year'
        />
        <Field
          className='add-movie-form__input-imdbID'
          autoComplete="off"
          name='imdbID'
          type='text'
          placeholder='Enter uniq ID'
        />
        <ErrorMessage name='Title'>
          {
            msg => (
              <div className='error-title-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
        <ErrorMessage name='Type'>
          {
            msg => (
              <div className='error-type-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
        <ErrorMessage name='Poster'>
          {
            msg => (
              <div className='error-poster-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
        <ErrorMessage name='Year'>
          {
            msg => (
              <div className='error-year-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
        <ErrorMessage name='imdbID'>
          {
            msg => (
              <div className='error-imdbID-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
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