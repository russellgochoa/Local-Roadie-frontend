import { NavLink } from 'react-router-dom'


const Nav = () => {
  const publicOptions = (
      <div>
        <NavLink to="/about" className='nav-link about'>About</NavLink>
        <NavLink to="/login" className='nav-link login'>Login</NavLink>
      </div>
    );



return (
  <nav>
    <NavLink to="/" className="nav-logo-link" >
      <div className="logo-wrapper" alt="logo">
        <img className="logo"/>
        <h1 className='nav-title'>Local Roadie</h1>
      </div>
      </NavLink>
      </nav>
    )
    }
export default Nav