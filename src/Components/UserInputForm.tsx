import React, { useState, useRef } from 'react';
import { ChangeEvent } from 'react';
import './UserInputForm.scss';

const UserInput = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef: any = useRef();
  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    console.log(enteredNameValue);
    // nameInputRef.current.value = ''; // dom manipulation
    setEnteredName('');
  };
  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div className='user-input-form__name'>
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
      </div>
      <div className='user-input-form__actions'>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};

export default UserInput;
