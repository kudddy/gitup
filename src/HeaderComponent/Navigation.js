import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {withRouter} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import React from "react";
import {withStyles} from "@material-ui/styles";

// const useStyles = makeStyles((theme) => ({
//
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     appBar:{
//         background : '#2E3B55'
//     }
// }));

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
    },
    title: {
        flexGrow: 1,
    },
    appBar:{
        background : '#2E3B55'
    }

});

class ButtonAppBar extends React.Component{
    constructor(props) {
        super(undefined);

        this.state = {
            AuthState: false,
        }
    }
    handleBack = ()=>{
        this.probs.history.goBack()
    }
    handleForward = () =>{
        console.log(this.props.history)
        this.probs.history.go(+1)
    }




    render() {
        // let history = useHistory();

        const redirect = () => {
            this.props.history.push('/about')
        }
        const redirectMain = () => {
            this.props.history.push('/')
        }
        const redirectToken = () => {
            this.props.history.push('/howto')
        }
        const Exit = () => {
            this.props.updateData(false)
        let url = process.env.REACT_APP_BACKEND_ADR + 'exit'
        fetch(url, {
            credentials: "include"})
            .then((response) => response.ok);

            this.props.history.push('/')
    }
        const { classes } = this.props;

        let exitButton
        if (this.props.AuthStatus){
            exitButton = <Button color="inherit" onClick={Exit}>Выход</Button>
        } else {
            exitButton = null
        }
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            GitUp
                        </Typography>
                        <Grid container spacing={0} direction="row" justify="flex-end" alignItems="flex-end">
                            <Button color="inherit" onClick={redirectMain}>Главная</Button>
                            <Button color="inherit" onClick={redirect}>О сервисе</Button>
                            <Button color="inherit" onClick={redirectToken}>Где взять токен</Button>
                            {exitButton}
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

};
export default withStyles(useStyles)(withRouter(ButtonAppBar))


