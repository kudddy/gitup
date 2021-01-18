import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {useHistory, withRouter} from 'react-router-dom';
import {withStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar:{
        background : '#2E3B55'
    }
}));

// export default function ButtonAppBarOut() {
//     const classes = useStyles();
//     let history = useHistory();
//
//     const redirect = () => {
//         history.push('/about')
//     }
//     const redirectMain = () => {
//         history.push('/')
//     }
//     const redirectToken = () => {
//         history.push('/howto')
//     }
//     const Exit = () => {
//
//         let url = "http://127.0.0.1:9000/exit"
//         //йоqjd
//         fetch(url, {  headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             credentials: "include"})
//             .then((response) => response.ok);
//
//         history.push('/')
//     }
//     return (
//         <div className={classes.root}>
//             <AppBar className={classes.appBar} position="static">
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//                         GitUp
//                     </Typography>
//                     <Button color="inherit" onClick={redirectMain}>Главная</Button>
//                     <Button color="inherit" onClick={redirect}>О сервисе</Button>
//                     <Button color="inherit" onClick={redirectToken}>Где взять токен</Button>
//                     <Button color="inherit" onClick={Exit}>Выход</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }