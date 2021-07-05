import React from 'react';
import './Header.scss';
import menuDots from '../../img/icons/menuDots.svg';

const Header = () => {
  return (
    <header className='header'>
      <a className='header__menu-dots menu-dots'>
        {' '}
        <img src={menuDots} alt='menu-dots' className='menu-dots' />
      </a>
      <span className='header__title'>testsystem</span>
      <input type='text' className='header__search-input' placeholder='Поиск' />
      <select name='header-select' id='header-select' className='header__menu-select'>
        <option value='division'>Подразделения</option>
      </select>{' '}
      <nav>
        <ul className='header__list'>
          <li>Система</li>
          <li>Первая система</li>
          <li>Вторая система</li>
          <li>Третья система</li>
          <li>Система</li>
        </ul>
      </nav>
      <div className='header__submenu'>
        <a href='#' title='helps'>
          помощь
        </a>
        <a href='#' title='notification'>
          notification
        </a>
        <a href='#' title='options'>
          option
        </a>
        <a href='#' title='photo'>
          {' '}
          photo
        </a>
      </div>
    </header>
  );
};
export default Header;
