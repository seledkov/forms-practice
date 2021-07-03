import React, { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './GuestLoginForm.scss';
import passShowIcon from '../../img/icons/passShowIcon.svg';
import checkboxBox from '../../img/icons/checkbox/checkboxBox.svg';

const GuestLoginForm = (props: any) => {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isTouchedEnteredLogin, setIsTouchedEnteredLogin] = useState(false);
  const [isTouchedEnteredPassword, setIsTouchedEnteredPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [passwordIsShow, setPasswordIsShow] = useState(true);
  const [isLoginCheckbox, setIsLoginCheckbox] = useState(0);
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
          <label
            htmlFor='login-checkbox'
            className='user-input-form__custom-checkbox custom-checkbox'>
            {/* todo: create custom checkbox component */}
            <input type='checkbox' id='login-checkbox' className='custom-checkbox__input' />
            <svg width='32' height='32' viewBox='-4 -4 39 39' aria-hidden='true' focusable='false'>
              <rect
                className='checkbox__bg'
                width='35'
                height='35'
                x='-2'
                y='-2'
                stroke='currentColor'
                fill='none'
                stroke-width='3'
                rx='6'
                ry='6'></rect>
              <polyline
                className='checkbox__checkmark'
                points='4,14 12,23 28,5'
                stroke='transparent'
                stroke-width='4'
                fill='none'></polyline>
            </svg>
            <span className='custom-checkbox__text'>Запомнить меня</span>
          </label>
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
