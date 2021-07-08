import React from 'react';
import './Header.scss';
import menuDots from '../../img/icons/menuDots.svg';
import option from '../../img/icons/option.svg';
import subscription from '../../img/icons/subscription.svg';
import avatartImage from '../../img/avatarImage.png';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__flex-wrapper'>
        <a className='header__menu-dots'>
          {' '}
          <img src={menuDots} alt='menu-dots' className='menu-dots' />
        </a>
        <span className='header__title'>testsystem</span>
        <input type='text' className='header__search-input' placeholder='Поиск' />
        <select name='header-select' id='header-select' className='header__menu-select'>
          <option value='division'>Подразделения</option>
        </select>{' '}
      </div>

      <nav className='header__systems-nav'>
        <ul className='header__list'>
          <li>Система</li>
          <li>Первая система</li>
          <li>Вторая система</li>
          <li>Третья система</li>
          <li>Система</li>
        </ul>
      </nav>
      <div className='header__submenu'>
        <a href='#' title='helps' className='header__submenu_button-link'>
          помощь
        </a>
        <a href='#' title='notification'>
          <img src={subscription} alt='subs' />
        </a>
        <a href='#' title='options'>
          <img src={option} alt='option' />
        </a>
        <a href='#' title='photo'>
          {' '}
          <img src={avatartImage} alt='avatar' />
        </a>
      </div>
    </header>
  );
};
export default Header;
