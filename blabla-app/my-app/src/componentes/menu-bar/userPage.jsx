
import imagen from '../../assets/image.png'
import React from 'react'
import check from '../../assets/check.png'
import '../menu-bar/style.css';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import{useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';

    function UserPage(){
  
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [t, i18n] = useTranslation("global");
  
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover' : undefined;
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? 'simple-popover' : undefined;

 
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    
    setAnchorEl2(null);
    setAnchorEl3(null);
  };
  


  return (
      
    <div>
      
      <header className="bar-menu">
      <Link to="/"><img className="logo" src={imagen} alt=""></img></Link>
      
         <div className="btn-container">
             <p className="hello-title">{t("header.hello")}, Fernando</p>
    <button onClick={handleClick2} className="btn-sesion">{t("header.registro")}</button>
    <button className="btn-ins">{t("header.embarcación")}</button>
    </div>
      </header>
      
    <div className="logs">

    <Popover id={id2}
open={open2}
anchorEl={anchorEl2}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:1000 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'center'}}>
      
      <div className="check-card">
        <img className="check-image" src={check} alt=""></img>
        <p className="p-check">{t("logins.verificado")}</p>
      </div>
      </Popover>


    </div>
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
            
                <Button  variant="contained"  onClick={handleClick3}>
        Idioma
      </Button>

      <Popover
id={id3}
open={open3}
anchorEl={anchorEl3}
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
      <Button onClick={()=> i18n.changeLanguage("es")}  variant="contained" >
        Español
      </Button>
      <Button onClick={()=> i18n.changeLanguage("en")}  variant="contained"  >
        ingles
      </Button>
      </div>
      </Popover>
        </div>
    </div>
    );
}

export default UserPage;