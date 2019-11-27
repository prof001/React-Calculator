import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <div className='header'>
    <FontAwesomeIcon icon={faCalculator} size='4x' color='white' />
    <h2>Calculator</h2>
  </div>
);

export default Header;
