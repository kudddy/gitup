import React from 'react';
import './index.css';
import {withRouter} from 'react-router-dom'
//css
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

// import ButtonAppBar from './Navigation'

import {withStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const useStyles = (theme) => ({
    root: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    interText:{
        color:"#fff"
    }

});


class Auth extends React.Component {

    constructor(props) {
        super(undefined);

        this.state = {killComponent:true}


    }
    componentWillUnmount(){
        console.log("Смотри что тут")
        console.log(this.state.killComponent)
    }

    render (){

        const { classes } = this.props;

        cookies.set('myCat', 'Pacman', { path: '/' });
        console.log("смотрим что в окнах")

        console.log(window.location.href)

        return (
            <div className="row">
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    <Grid className={classes.interText} item xs={12}>
                            <Typography align="center" variant="h4">Вход</Typography>
                        <br/>
                    </Grid>
                        <div className="col-md-4">
                            <br/>
                            <Button variant="contained" color="primary" onClick={event =>  window.location.href='http://localhost:8080/github/login'}>
                                Login with GitHub
                            </Button>
                        </div>
                </Grid>

            </div>
        );
}
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withRouter(Auth)
export default withStyles(useStyles)(withRouter(Auth))