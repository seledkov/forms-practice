import React, { useState, useRef, FormEvent } from 'react';
import { ChangeEvent } from 'react';
import './UserInputForm.scss';

const UserInput = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [isValidEnteredName, setIsValidEnteredName] = useState(true);
  const nameInputRef: any = useRef();
  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    if (enteredName.trim().length === 0) {
      setIsValidEnteredName(false);
      return;
    }
    setIsValidEnteredName(true);
    console.log(enteredNameValue);
    // nameInputRef.current.value = ''; // bad practice - dom manipulation, this js, not react better use state for shadow dom activate
    setEnteredName('');
  };
  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div className={isValidEnteredName ? 'user-input-form__name' : 'user-input-form__name_error'}>
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
        {!isValidEnteredName && (
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
