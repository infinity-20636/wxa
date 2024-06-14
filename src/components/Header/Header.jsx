import { NavLink, Link } from 'react-router-dom'
import './Header.scss'


export const Header = ()=> {
return (
        <>
            <header className="container">
                <div className="header">
                    <Link to="/" className="header__log">Logo</Link>
                    <nav className="header__nav">
                        <NavLink to="/" className="header__nav-link">Home</NavLink>
                        <NavLink to="/content" className="header__nav-link">Content</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header