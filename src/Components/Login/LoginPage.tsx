import React from 'react';
import GuestLoginForm from './GuestLoginForm';
import './LoginPage.scss';

const LoginPage = (props: any) => {
  return (
    <section className='login-page'>
      <div className='login-page__wrapper'>
        <div className='login-page__bg-text'>testSYSTEM</div>
        <div className='login-page__content'>
          <div> На главную</div>
          <div className='login-page__title'>Добро пожаловать в testsystem</div>
          <GuestLoginForm onSetIsLogin={props.onSetIsLogin} />
          <div>Вы можете войти через ЕСИА</div>
          <div>У Вас еще нет аккаунта? Зарегистрируйтесь</div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
