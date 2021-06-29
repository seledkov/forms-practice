import React, { useState, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './GuestLoginForm.scss';
import passShowIcon from '../../img/icons/passShowIcon.svg';

const GuestLoginForm = (props: any) => {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isTouchedEnteredLogin, setIsTouchedEnteredLogin] = useState(false);
  const [isTouchedEnteredPassword, setIsTouchedEnteredPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordIsShow, setPasswordIsShow] = useState(true);
  // validation
  const isValidEnteredLogin = enteredLogin.trim() !== '' && enteredLogin.length >= 4;
  const isValidEnteredPassword = enteredPassword.trim() !== '' && enteredPassword.length >= 4;
  //style check
  const isInvalidLoginInput = !isValidEnteredLogin && isTouchedEnteredLogin;
  const isInvalidPasswordInput = !isValidEnteredPassword && isTouchedEnteredPassword;

  const loginInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredLogin(event.target.value);
  };
  const loginInputBlurHandler = () => {
    setIsTouchedEnteredLogin(true);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setFormIsValid(true);
    props.onSetIsLogin(true);
    setEnteredLogin('');
    setEnteredPassword('');
    setIsTouchedEnteredLogin(false);
    setIsTouchedEnteredPassword(false);
  };

  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div className='user-input-form__wrapper'>
        <label htmlFor='name'>Логин</label>
        <input
          className={
            isInvalidLoginInput
              ? 'user-input-form__input user-input-form__input_error'
              : 'user-input-form__input'
          }
          id='name'
          type='text'
          placeholder='Введите логин или e-mail'
          onChange={loginInputChangeHandler}
          onBlur={loginInputBlurHandler}
          value={enteredLogin}
        />

        {!formIsValid && (
          <p className='user-input-form__error-message'> Неверный логин или пароль</p>
        )}
      </div>
      <div className='user-input-form__wrapper'>
        <label htmlFor='password'>Пароль</label>
        <input
          className={
            isInvalidPasswordInput
              ? 'user-input-form__input user-input-form__input_error'
              : 'user-input-form__input'
          }
          placeholder='Введите пароль'
          type={passwordIsShow ? 'text' : 'password'}
          id='password'
          onBlur={() => {
            setIsTouchedEnteredPassword(true);
          }}
          onChange={(event) => {
            setEnteredPassword(event.target.value);
          }}
          value={enteredPassword}
        />
        <img
          className='user-input-form__input_icon-right'
          src={passShowIcon}
          alt='show-password'
          onClick={() => {
            setPasswordIsShow((passwordIsShow) => !passwordIsShow);
          }}
        />
      </div>

      <div className='user-input-form__actions'>
        <button type='submit'>Войти</button>
      </div>
    </form>
  );
};

export default GuestLoginForm;
