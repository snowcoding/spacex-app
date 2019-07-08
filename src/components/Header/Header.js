import React from 'react'
import Logo from '../../assets/rocket-logo.png'
import Account from '../../assets/account.png'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={Logo} className='logo' alt='logo' height='40' width='40' />
        <div className='app-name'>Rockbits</div>
      </div>
      <img
        src={Account}
        className='account-icon'
        alt='account icon'
        height='38'
        width='38'
      />
    </div>
  )
}

export default Header
