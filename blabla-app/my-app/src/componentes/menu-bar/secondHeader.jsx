


import React from 'react'
import '../menu-bar/secondHeader.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import{useTranslation} from 'react-i18next';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStyles } from './theme';





    function Secondheader(){
        const [t, i18n] = useTranslation("global");
        const classes = useStyles();
return(
       
<div className="header-container">  

<h4 className="infoh4">{t("logins.encabezado1")} <br></br> {t("logins.encabezado2")} </h4>   
 
<h5 className="infoh5">{t("logins.encabezado3")}</h5>

<Container className={classes.root} maxWidth="xs">
      
  <form >
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
         
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={t("logins.destino")}
              
              type="password"
              variant="outlined"
              className="inp-search"
            />
          </Grid>
         
          <Grid item xs={12}>
            <TextField
              fullWidth
              
              label={t("logins.fecha")}
              onfocus="(type='date')"
            //   type="date"
              variant="outlined"
              className="inp-search"
            />
          </Grid>
          <Grid item xs={12}>
            <select className="select-search">
              <option>{t("logins.numero")}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
               <span><ArrowDropDownIcon className="icon-footer"></ArrowDropDownIcon></span>
            </select>
          </Grid>
          
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <button 
        className="btn-search" >
        
        {t("logins.buscar")}
          </button>
       
      </Grid>
    </Grid>
  </form>
</Container>

</div>

);
}

export default Secondheader;