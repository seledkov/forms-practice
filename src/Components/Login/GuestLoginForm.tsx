import React, { useState, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './GuestLoginForm.scss';
import passShowIcon from '../../img/icons/passShowIcon.svg';

const GuestLoginForm = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  // const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);
  const [isTouchedEnteredPassword, setIsTouchedEnteredPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordIsShow, setPasswordIsShow] = useState(false);

  const isValidEnteredPassword = enteredPassword.length >= 5 && enteredPassword.includes('@');
  const isValidEnteredName = enteredName.trim() !== '' && enteredName.length > 2;
  const isInvalidNameInput = !isValidEnteredName && isTouchedEnteredName;
  const isInvalidPasswordInput = !isValidEnteredPassword && isTouchedEnteredPassword;

  useEffect(() => {
    if (isValidEnteredName && isValidEnteredPassword) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isValidEnteredName, isValidEnteredPassword]);

  let formIsValidAlternative = false;
  if (isValidEnteredName && isValidEnteredPassword) {
    formIsValidAlternative = true;
  }
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setIsTouchedEnteredName(true);
    if (!isValidEnteredName) {
      return;
    }
    setEnteredName('');
    setEnteredPassword('');
    setIsTouchedEnteredName(false);
    setIsTouchedEnteredPassword(false);
  };
  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setIsTouchedEnteredName(true);
  };
  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div className='user-input-form__wrapper'>
        <label htmlFor='name'>Логин</label>
        <input
          className={
            isInvalidNameInput
              ? 'user-input-form__input user-input-form__input_error'
              : 'user-input-form__input'
          }
          id='name'
          type='text'
          placeholder='Введите логин или e-mail'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />

        {isInvalidNameInput && isInvalidPasswordInput && (
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
        <button disabled={!formIsValidAlternative} type='submit'>
          Войти
        </button>
      </div>
    </form>
  );
};

export default GuestLoginForm;
