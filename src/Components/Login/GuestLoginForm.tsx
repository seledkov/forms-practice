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
  const [isRememberCheckbox, setIsRememberCheckbox] = useState(false);
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
  const rememberToggleHandler = (event: any) => {
    setIsRememberCheckbox(event.target.checked);
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
        <label htmlFor='name' className='user-input-form__label'>
          Логин
        </label>
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
        <label htmlFor='password' className='user-input-form__label'>
          Пароль
        </label>
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
      <div className='user-input-form__wrapper flex-sb'>
        <div>
          <label
            htmlFor='login-checkbox'
            className='user-input-form__custom-checkbox custom-checkbox'>
            {/* todo: create custom checkbox component and import svg*/}
            <input
              type='checkbox'
              id='login-checkbox'
              className='custom-checkbox__input'
              onClick={rememberToggleHandler}
            />
            <svg width='20' height='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false'>
              <rect
                className='checkbox__bg'
                width='20'
                height='20'
                stroke='currentColor'
                fill='none'
                rx='6'></rect>
              <path
                className='checkbox__checkmark'
                d='M12.9121 7.29886C13.1992 7.01171 13.6648 7.01171 13.952 7.29886C14.2391 7.58601 14.2391 8.05157 13.952 8.33872L9.54019 12.7505C9.25304 13.0376 8.78748 13.0376 8.50033 12.7505L6.04935 10.2995C5.7622 10.0124 5.7622 9.54679 6.04935 9.25964C6.3365 8.97249 6.80206 8.97249 7.08921 9.25964L9.02026 11.1907L12.9121 7.29886Z'
                stroke='none'
                fill='transparent'
              />
            </svg>
            <span className='custom-checkbox__text'>Запомнить меня</span>
          </label>
        </div>
        <a href='#' className='user-input-form__link'>
          Забыли пароль?{' '}
        </a>
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
