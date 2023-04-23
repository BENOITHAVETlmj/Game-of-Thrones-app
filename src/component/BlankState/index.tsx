import React from 'react';
import './style.css'

interface Props {
  children: React.ReactNode
}

const BlankState: React.FC<Props> = ({ children}) =>
  <ul className='blankStateUl'>
    <li className='blankStateLi'>{children}</li>
  </ul>


export default BlankState;
