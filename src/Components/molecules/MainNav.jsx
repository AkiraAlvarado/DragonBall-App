import { NavLink } from "react-router-dom";

const  MainNav = () => {
   return(
      <nav className="mainNav">
         <NavLink to="/"><li className="mainNav__item">Personajes</li></NavLink>
         <NavLink to="/Planets" className="mainNav__item"><li>Planetas</li></NavLink>
      </nav>
   )
}
export default MainNav;