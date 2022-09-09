import { NavLink } from 'react-router-dom'


const publicOptions = (
  <div>
    <NavLink to="/about" className='nav-link about'>About</NavLink>
    <NavLink to="/login" className='nav-link login'>Login</NavLink>
  </div>
)

export default Nav