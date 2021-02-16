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
import {red} from "@material-ui/core/colors";
import {CircularProgress} from "@material-ui/core";
//
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


        this.state = {
            json: [],
            isLoading: false,
            killComponent:true
        }

    }

    handleBack = () => {
        this.probs.history.goBack()
    }
    handleForward = () => {
        console.log(this.props.history)
        this.probs.history.go(+1)
    }

    componentDidMount() {

        let data = cookies.get('example-github-app')

        if (data){
            // пром
            // let url = `${process.env.PUBLIC_URL}` + '/authcheck'
            let url = "http://127.0.0.1:56164/authcheck"
            fetch(url, {
                credentials: "include"})
                .then((response) => response.json())
                .then((json => this.setState({json: json, isLoading: true})))
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { json, isLoading } = this.state;

        let data = cookies.get('example-github-app')

        if (isLoading){
            console.log("Загрузился ответ от сервера, статус авторизации:")
            console.log(json["Status"])

            if (json["Status"]){
                console.log(json["UserId"])
                this.props.history.push('/jobinfo/' + json["UserId"] + '&' + data)
            }
        }
    }

    render (){

        const { classes } = this.props;

        const { isLoading } = this.state;


        if (!isLoading){
            return (<div className="row">
                {/*<ButtonAppBar />*/}

                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' , background: red}}>
                    <Grid item xs={12}>
                        <div className="col-md-1 col-md-offset-1">
                            <CircularProgress />
                        </div>
                    </Grid>
                </Grid>

            </div>);
        } else {
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
                            {/*отладка*/}
                            <Button variant="contained" color="primary" onClick={event =>  window.location.href='http://localhost:56164/github/login'}>
                                {/*пром*/}
                                {/*<Button variant="contained" color="primary" onClick={event =>  window.location.href="/github/login"}>*/}
                                Login with GitHub
                            </Button>
                        </div>
                    </Grid>

                </div>
            );

        }



}
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withRouter(Auth)
export default withStyles(useStyles)(withRouter(Auth))