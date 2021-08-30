
 import { makeStyles } from '@material-ui/core/styles';
 
 export const useStyles = makeStyles((theme) => ({
    root: {
  backgroundColor: '#6A8F93',
  height: '22rem',
  width: 'auto',
  padding: '2rem',
  marginLeft:'2rem',
  marginRight:'2rem',
  marginBottom:'4rem',
  borderRadius: '4px',
  boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.5)',
      
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