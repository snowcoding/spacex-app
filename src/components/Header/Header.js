import React from 'react'
import Logo from '../../assets/rocket-logo-tiny.png'
import Account from '../../assets/account.png'
import { Link, withRouter } from 'react-router-dom'
import './header.scss'

const Header = props => {
  let pathName = ''

  if (props.location.pathname === '/explore-launches') pathName = '/ Explore Launches'
  else if (props.location.pathname === '/view-launches') pathName = '/ View Launches'

  return (
    <div className='header'>
      <div className='header-left'>
        <img src={Logo} className='logo' alt='logo' height='40' width='40' />
        <div className='text'>
          <Link className='header-link' to='/'>
            RockLauncher
          </Link>
        </div>
        <div className='text path'>{pathName}</div>
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

export default withRouter(Header)
