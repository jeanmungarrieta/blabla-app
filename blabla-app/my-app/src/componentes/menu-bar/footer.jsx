
import React from 'react'
import '../menu-bar/footer.css';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import{useTranslation} from 'react-i18next';
import imagen from '../../assets/Logo.png'
import ig from '../../assets/ig.png'
import fb from '../../assets/fb.png'
import twi from '../../assets/twi.png'

import { useStyles } from './theme';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Footer(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [t, i18n] = useTranslation("global");
    const open = Boolean(anchorEl);
    const id= open ? 'simple-popover' : undefined;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); };

      const handleClose = () => {
       
        setAnchorEl(null);
      };

    return(

<div className="footer-container footer-container-res">
            <img className="logo"src={imagen} alt=""></img>

            <ul className="nav-footer">
                <li className="li-footer">  <nav>Sobre nosotros <span></span></nav></li>
                <div className="barra-footer"></div>
                <li className="li-footer">  <nav>Contacto </nav></li>
                <div className="barra-footer"></div>
                <li className="li-footer">  <nav>Ayuda <span></span></nav></li>
                <div className="barra-footer"></div>
                <li className="li-footer">  <nav>Seguro <span></span></nav></li>
                <div className="barra-footer"></div>
                
            </ul>
            <div className="socialIcon">
              
            <img  className="footer-logo"src={fb}alt=""></img>
            <img className="footer-logo"src={ig} alt=""></img>
            <img className="footer-logo"src= {twi} alt=""></img>
            </div>
            
                <Button className={classes.footBar} aria-describedby={id} variant="contained"  onClick={handleClick}>
        Idioma <span><ArrowDropDownIcon className="icon-footer"></ArrowDropDownIcon></span>
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
      <Button onClick={()=> i18n.changeLanguage("es")} className={classes.footBar} aria-describedby={id} variant="contained" >
        Español
      </Button>
      <Button onClick={()=> i18n.changeLanguage("en")} aria-describedby={id} className={classes.footBar} variant="contained"  >
        ingles
      </Button>
      </div>
      </Popover>
      
        </div>
    )}

    export default Footer