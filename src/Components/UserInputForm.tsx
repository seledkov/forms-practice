import React, { useState, useRef } from 'react';
import { MutableRefObject } from 'react';
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
    const nameValue = nameInputRef.current.value;
    console.log(nameValue);
  };
  return (
    <form className='user-input-form' onSubmit={formSubmitHandler}>
      <div className='user-input-form__name'>
        <label htmlFor='name'>
          Your Name: {enteredName}
          {/* {nameInputRef.current.value} */}
        </label>
        <input id='name' type='text' onChange={nameInputChangeHandler} ref={nameInputRef} />
      </div>
      <div className='user-input-form__actions'>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};

export default UserInput;
