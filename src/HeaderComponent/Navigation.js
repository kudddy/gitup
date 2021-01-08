import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

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
}));



export default function ButtonAppBar() {
    const classes = useStyles();
    let history = useHistory();

    const redirect = () => {
        history.push('/about')
    }
    const redirectMain = () => {
        history.push('/')
    }
    const redirectToken = () => {
        history.push('/howto')
    }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GitUp
                    </Typography>
                    <Button color="inherit" onClick={redirectMain}>Главная</Button>
                    <Button color="inherit" onClick={redirect}>О сервисе</Button>
                    <Button color="inherit" onClick={redirectToken}>Где взять токен</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}