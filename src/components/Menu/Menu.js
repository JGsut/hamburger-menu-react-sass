import React from 'react';

function Menu() {
  return (
    <div>
      <div className='menu-wrap'>
        <input type='checkbox' className='toggler' />
        <div className='hamburger'>
          <div></div>
        </div>
        <div className='menu'>
          <div>
            <div>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/'>About</a>
                </li>
                <li>
                  <a href='/'>Services</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
