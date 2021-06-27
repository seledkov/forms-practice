import React, { useState, useRef, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './UserInputForm.scss';

const UserInput = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredMail, setEnteredMail] = useState('');
  // const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);
  const [isTouchedEnteredMail, setIsTouchedEnteredMail] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  // const nameInputRef: any = useRef();
  const isValidEnteredMail = enteredMail.length >= 5 && enteredMail.includes('@');
  const isValidEnteredName = enteredName.trim() !== '' && enteredName.length > 2;
  const isInvalidNameInput = !isValidEnteredName && isTouchedEnteredName;
  const isInvalidMailInput = !isValidEnteredMail && isTouchedEnteredMail;

  useEffect(() => {
    if (isValidEnteredName && isValidEnteredMail) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isValidEnteredName, isValidEnteredMail]);

  let formIsValidAlternative = false;
  if (isValidEnteredName && isValidEnteredMail) {
    formIsValidAlternative = true;
  }
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    // const enteredNameValue = nameInputRef.current.value;
    setIsTouchedEnteredName(true);
    if (!isValidEnteredName) {
      return;
    }
    // if (enteredName.trim() === '') {
    //   // setIsValidEnteredName(false);
    //   return;
    // }
    // setIsValidEnteredName(true);
    // nameInputRef.current.value = ''; // bad practice - dom manipulation, this js, not react better use state for shadow dom activate
    setEnteredName('');
    setEnteredMail('');
    setIsTouchedEnteredName(false);
    setIsTouchedEnteredMail(false);
  };
  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== '') {
    //   setIsValidEnteredName(true);
    // }
  };
  const nameInputBlurHandler = () => {
    setIsTouchedEnteredName(true);
    // if (enteredName.trim() !== '') {
    //   setIsValidEnteredName(true);
    // }
  };
  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor='name'>
          Your Name: {enteredName}
          {/* {nameInputRef.current.value} */}
        </label>
        <input
          className={isInvalidNameInput ? 'user-input-form__name_error' : 'user-input-form__name'}
          id='name'
          type='text'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // ref={nameInputRef}
          value={enteredName}
        />
        {isInvalidNameInput && (
          <p className='user-input-form__error-message'> Name must not be empty </p>
        )}
      </div>
      <div>
        <label htmlFor='email'>Your email: {enteredMail}</label>
        <input
          className={isInvalidMailInput ? 'user-input-form__name_error' : 'user-input-form__name'}
          type='email'
          id='email'
          onBlur={() => {
            setIsTouchedEnteredMail(true);
          }}
          onChange={(event) => {
            setEnteredMail(event.target.value);
          }}
          value={enteredMail}
        />
        {isInvalidMailInput && (
          <p className='user-input-form__error-message'> Name must not be empty and need "@"</p>
        )}
      </div>

      <div className='user-input-form__actions'>
        <button disabled={!formIsValidAlternative} type='submit'>
          submit
        </button>
      </div>
    </form>
  );
};

export default UserInput;
