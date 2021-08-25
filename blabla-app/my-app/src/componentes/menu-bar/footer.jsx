
import React from 'react'
import '../menu-bar/footer.css';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import{useTranslation} from 'react-i18next';



function Footer(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [t, i18n] = useTranslation("global");
    const open = Boolean(anchorEl);
    const id= open ? 'simple-popover' : undefined;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); };

      const handleClose = () => {
       
        setAnchorEl(null);
      };

    return(

<div ClassName="footer-container">
            <img ClassName="pricipal-logo"src= "img/img-logo.png" alt=""></img>
            <ul>
                <li>Sobre nosotros</li>
                <li>Contacto</li>
                <li>Ayuda</li>
                <li>Seguro</li>
            </ul>
            <img  ClassName="facebook-logo"src="img/Vector(fb).png" alt=""></img>
            <img ClassName="instagram-logo"src="Vector (inst).png" alt=""></img>
            <img ClassName="twitter-logo"src= "Vector (tw).png" alt=""></img>
            
                <Button aria-describedby={id} variant="contained"  onClick={handleClick}>
        Idioma
      </Button>

      <Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'center',
}}
transformOrigin={{
  vertical: 'bottom',
  horizontal: 'center',
}}
>
  <div className="btn-language">
      <Button onClick={()=> i18n.changeLanguage("es")} aria-describedby={id} variant="contained" >
        Español
      </Button>
      <Button onClick={()=> i18n.changeLanguage("en")} aria-describedby={id} variant="contained"  >
        ingles
      </Button>
      </div>
      </Popover>
      
        </div>
    )}

    export default Footer