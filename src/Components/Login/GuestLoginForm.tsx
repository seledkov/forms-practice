import React, { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './GuestLoginForm.scss';
import passShowIcon from '../../img/icons/passShowIcon.svg';

const GuestLoginForm = (props: any) => {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isTouchedEnteredLogin, setIsTouchedEnteredLogin] = useState(false);
  const [isTouchedEnteredPassword, setIsTouchedEnteredPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [passwordIsShow, setPasswordIsShow] = useState(true);
  //validation
  const isValidEnteredLogin = enteredLogin.length > 4 && enteredLogin.trim() !== '';
  const isValidEnteredPassword = enteredPassword.length > 4 && enteredPassword.trim() !== '';
  //style check
  const isInvalidLoginInput = !isValidEnteredLogin && isTouchedEnteredLogin;
  const isInvalidPasswordInput = !isValidEnteredPassword && isTouchedEnteredPassword;

  const loginInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredLogin(event.target.value);
  };
  const loginInputBlurHandler = () => {
    setIsTouchedEnteredLogin(true);
  };

  const passwordInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };
  const passwordInputBlurHandler = () => {
    setIsTouchedEnteredPassword(true);
  };

  const passwordShowToogle = () => {
    setPasswordIsShow((passwordIsShow) => !passwordIsShow);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!isValidEnteredLogin || !isValidEnteredPassword) {
      setIsError(true);
      return;
    }
    props.onSetIsLogin(true);
    setIsError(false);
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

        {isError && <p className='user-input-form__error-message'> Неверный логин или пароль</p>}
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
          onBlur={passwordInputBlurHandler}
          onChange={passwordInputChangeHandler}
          value={enteredPassword}
        />
        <img
          className='user-input-form__input_icon-right'
          src={passShowIcon}
          alt='show-password'
          onClick={passwordShowToogle}
        />
      </div>
      <div>
        <div>
          <label htmlFor='remember-checkbox'> Запомнить меня</label>
          <input type='checkbox' id='remember-checkbox' className='user-input-form__checkbox' />
        </div>

        <a href='#'>Забыли пароль? </a>
      </div>
      <div className='user-input-form__actions'>
        <button className='user-input-form__actions-button' type='submit'>
          Войти
        </button>
      </div>
    </form>
  );
};

export default GuestLoginForm;
