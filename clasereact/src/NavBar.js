// const  variable de tipo constante que va aretornar un componente y Navbar es el componente 
//return me va aretornar el parrafo  siempre cuanso se utilice html en react siempre se cierra con /
// siempre en react se debe de importar import react from react es la libreria 
import react from "react"
import colors from "./colors"
const color = 'pink';
const NavBar = (props) => {
    return(
    <header  style={{backgroundColor: colors.secondary, padding:'15px'}}>
    <a href="/">{props.title}</a>
    <span role="img"
    aria-label="logo"
    style={{fontSize:"60px",
    display:"inline-block",}}>
    👑
    </span>
      
    </header>)
    
}
//
export default NavBar