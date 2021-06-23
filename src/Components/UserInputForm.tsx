import React, { useState, useRef, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './UserInputForm.scss';

const UserInput = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  // const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);
  // const nameInputRef: any = useRef();
  // useEffect(() => {
  //   if (isValidEnteredName) {
  //     console.log('name input is valid');
  //   }
  // }, [isValidEnteredName]);
  const isValidEnteredName = enteredName.trim() !== '';
  const isInvalidNameInput = !isValidEnteredName && isTouchedEnteredName;

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
    setIsTouchedEnteredName(false);
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
      <div className={isInvalidNameInput ? 'user-input-form__name_error' : 'user-input-form__name'}>
        <label htmlFor='name'>
          Your Name: {enteredName}
          {/* {nameInputRef.current.value} */}
        </label>
        <input
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
      <div className='user-input-form__actions'>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};

export default UserInput;
