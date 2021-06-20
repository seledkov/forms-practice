import React, { useState, useRef, useEffect } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import './UserInputForm.scss';

const UserInput = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [isValidEnteredName, setIsValidEnteredName] = useState(false);
  const [isTouchedEnteredName, setIsTouchedEnteredName] = useState(false);

  const nameInputRef: any = useRef();
  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };
  useEffect(() => {
    if (isValidEnteredName) {
      console.log('name input is valid');
    }
  }, [isValidEnteredName]);

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    setIsTouchedEnteredName(true);
    if (enteredName.trim().length === 0) {
      setIsValidEnteredName(false);
      return;
    }
    setIsValidEnteredName(true);
    console.log(enteredNameValue);
    // nameInputRef.current.value = ''; // bad practice - dom manipulation, this js, not react better use state for shadow dom activate
    setEnteredName('');
  };
  const isInvalidNameInput = !isValidEnteredName && isTouchedEnteredName;
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
          ref={nameInputRef}
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
