import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
           <a className='navbar-brand'>Todai Restaurant</a>
           <button className='btn btn-primary'>
             Orders <span className='badge badge-light'>5</span>
           </button>
      </nav>
    </div>
  )
}

export default Header