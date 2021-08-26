
 import { makeStyles } from '@material-ui/core/styles';
 
 export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
    },
    footBar: {
        backgroundColor:'#252E41',
        display:'flex',
        justifyContent:'space-between',
    
    borderTop:'0.2px solid white',
    borderRight:'0.5px solid white',
    borderLeft:'0.5px solid white',
    borderBottom:'0.5px solid white',
    
    // borderColor: 'white',
    width:'12rem',
    height:'3rem',
    color:'white',
    }
    
}));