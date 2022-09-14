import { NavLink } from 'react-router-dom'


const Nav = () => {
  const publicOptions = (
      <div>
        <NavLink to="/trips" className='nav-link trips'>trips</NavLink>
        <NavLink to="/vehicles" className='nav-link vehicles'>vehicles</NavLink>
        <NavLink to="/about" className='nav-link about'>about</NavLink>
        <NavLink to="/login" className='nav-link login'>login</NavLink>
        
        
      </div>
    );



return (
  <nav>
    <NavLink to="/" className="nav-logo-link" >
      <div className="logo-wrapper" alt="logo">
        <img className="logo"/>
        <h1 className='nav-title'>local roadie</h1>
      </div>
      </NavLink>
      <div className="nav-right-links">
        <NavLink to="/" className='nav-link home'>home</NavLink>
        {publicOptions}
      </div>
      </nav>
    )
    }
export default Nav