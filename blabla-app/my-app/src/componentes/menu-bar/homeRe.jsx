
import imagen from '../../assets/image.png'
import React from 'react'
import x from '../../assets/x.png'
import check from '../../assets/check.png'
import '../menu-bar/style.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import{useTranslation} from 'react-i18next';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


    function HomeRe(){
    
      let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [t, i18n] = useTranslation("global");
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const open2 = Boolean(anchorEl2);
  const id2 = open ? 'simple-popover' : undefined;
  const open3 = Boolean(anchorEl3);
  const id3 = open ? 'simple-popover' : undefined;
  const open4 = Boolean(anchorEl4);
  const id4 = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
  };
  
  useEffect(()=>{
   const handleClickRegist=()=>{
        setAnchorEl2(true)
    }
    handleClickRegist()
  },[])

  return (
      
    <div>
      
      <header className="bar-menu">
      <img className="logo" src={imagen} alt=""></img>
      <div className="div-responsive">
         <Toolbar>
              <IconButton onClick={handleClick4}
              className="btn-nav-responsive"
               color="inherit"
            aria-label="open drawer"
            edge="end">
               <MenuIcon />
            </IconButton>
            </Toolbar>
           </div>

           <Popover id={id4}
open={open4}
anchorEl={anchorEl4}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:1000 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'center'}}>
         <div className=" btn-container-responsive">
    <button onClick={handleClick} className="btn-responsive">{t("header.Iniciar-Sesión")}</button>
    <button onClick={handleClick2} className="btn-responsive">{t("header.registro")}</button>
    <button className="btn-responsive">{t("header.embarcación")}</button>
    </div>
    </Popover>

    <div className="btn-container">
    <button onClick={handleClick} className="btn-sesion">{t("header.Iniciar-Sesión")}</button>
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

<Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:860 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'left',
}}>
    <Container className="log" maxWidth="xs">
          <div className="logTitle-Container">
        <p className="log-title">{t("logins.sesion")}</p>
        <button className="btn-x"> <img src={x} alt=""></img></button>
        </div>
      <form >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
             
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  
                  label={t("logins.Correo")}
                  
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  
                  label={t("logins.Contraseña")}
                
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p className="p-sigin">{t("logins.rememberCo")}</p>
            <p className="p-sigin">{t("logins.rememberCon")}</p>
            
              <div className="btnLog-container">
            <Button onClick={(e)=>{ 
              e.preventDefault()
              history.push("/usuario")}} className="btn-sesion"  type="submit" variant="contained">
            {t("logins.registrarse")}
            </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
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
            
                <Button aria-describedby={id} variant="contained"  onClick={handleClick3}>
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
      <Button onClick={()=> i18n.changeLanguage("es")} aria-describedby={id} variant="contained" >
        Español
      </Button>
      <Button onClick={()=> i18n.changeLanguage("en")} aria-describedby={id} variant="contained"  >
        ingles
      </Button>
      </div>
      </Popover>  
        </div>
    </div>
    );
}

export default HomeRe;