import React from 'react';
import GuestLoginForm from './GuestLoginForm';
import './LoginPage.scss';

const LoginPage = (props: any) => {
  return (
    <section className='login-page'>
      <div className='login-page__wrapper'>
        <div className='login-page__bg-text'>testSYSTEM</div>
        <div className='login-page__content'>
          <div className='login-page__return'>
            <span> На главную</span>
          </div>
          <div className='login-page__content-wrapper'>
            <div className='login-page__title'>Добро пожаловать в testsystem</div>
            <GuestLoginForm onSetIsLogin={props.onSetIsLogin} />

            <div className='login-page__links'>
              <p>
                Вы можете войти через <a href='#'>ЕСИА</a>
              </p>
              <p>
                {' '}
                У Вас еще нет аккаунта? <a href='#'>Зарегистрируйтесь</a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
