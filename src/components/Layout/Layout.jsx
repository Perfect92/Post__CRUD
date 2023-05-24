import { NavLink, Outlet } from "react-router-dom"


const activeMenu = ({isActive}) => isActive ? 'activeMenu' : ''

const Layout = () => {
    return (
        <>
        <nav>
        <ul>
            <li> <NavLink to={'/'} className={activeMenu}>Home</NavLink> </li>
            <li> <NavLink to={'/about'} className={activeMenu}>About Us</NavLink> </li>
            <li> <NavLink to={'/posts'} className={activeMenu}>Posts</NavLink> </li>
        </ul>
        </nav>
            <Outlet/>
            <footer className="footer">Geeks</footer>
        </>
    )
}
export default Layout