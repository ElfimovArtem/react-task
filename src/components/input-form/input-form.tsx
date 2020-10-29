import React from 'react';
import {
  Formik,
  Form,
  ErrorMessage,
  Field
} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button } from '../button';
import { headerConst } from '../../constants';
import {
  selectFilterTitle,
  selectFilterDirector
} from '../../redux/search-filter-actions';
import './input-form-styles.css';

export const InputForm = () => {
  const dispatch = useDispatch();

  const filterBtnHandler = (ev) => {
    if(ev.target.id === 'title') {
      dispatch(selectFilterTitle(ev.target.id));
    } else {
      dispatch(selectFilterDirector(ev.target.id))
    }
  }

  return (
    <Formik
      initialValues={
        {
          text: ''
        }
      }
      validationSchema={
        Yup.object({
          text: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3, 'Must be at least 3 characters long')
            .required('This is a required field...')
        })
      }
      onSubmit={
        (values, { setFieldValue }) => {
          console.log(values.text);
          setFieldValue('text', ''); //Очистит поле после отправки
        }
      }
    >
      <Form className='input-form'>
        <label className='input-form__label' htmlFor='text'>{headerConst.formLabel}</label>
        <Field
          className='input-form__input'
          autoComplete="off"
          name='text'
          type='text'
        />
        <ErrorMessage name='text'>
          {
            msg => (
              <div className='error-validation'>
                {msg}
              </div>
            )
          }
        </ErrorMessage>
        <div className='input-form__btn-bar'>
          <div className='btn-bar__filter-container'>
            <p className='filter-container__label'>{headerConst.filterLabel}</p>
            <Button
              type='button'
              className='filter-container__btn'
              id='title'
              onClick={(ev) => filterBtnHandler(ev)}
            >{headerConst.titleBtnLabel}</Button>
            <Button
              type='button'
              className='filter-container__btn'
              id='director'
              onClick={(ev) => filterBtnHandler(ev)}
            >{headerConst.directorBtnLabel}</Button>
          </div>
          <div className='btn-bar__submit-container'>
            <Button
              type='submit'
              className='submit-container__search-btn'
            >{headerConst.searchBtnLabel}</Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};