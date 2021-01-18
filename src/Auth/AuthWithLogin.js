import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {withRouter, Link} from 'react-router-dom'
//css
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import {CircularProgress, createMuiTheme, TextField, ThemeProvider} from "@material-ui/core";
import Cookies from 'js-cookie';

// import ButtonAppBar from './Navigation'

import ButtonAppBar from '../HeaderComponent/Navigation'
import {withStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

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

    handleBack = ()=>{
        this.probs.history.goBack()
    }
    handleForward = () =>{
        console.log(this.props.history)
        this.probs.history.go(+1)
    }

    constructor (props){
        super (undefined);

        this.state = {
            username: Cookies.get("session-name"),
            cookieIsloading: false,
            cookieCheckJson: [],
            formatCompUpdater: "NONE",
            authState:false

        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){
        if (this.nameTextInput !== null) {

            this.setState({
                json: [],
                isLoading: false,
                formatCompUpdater:"CHECKTOKEN"

            });
        }
    }
    componentDidMount () {
        console.log("мы перед прописовкой компонента")
        console.log(this.state.username)
        ReactDOM.findDOMNode(this.nameTextInput).focus();

        console.log("мы перед прописовкой компонента")
        let url = "http://127.0.0.1:9000/checkout"
        //йоqjd
        fetch(url, {  headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: "include"})
            .then((response) => response.json())
            .then((json => this.setState({cookieCheckJson: json, cookieIsloading: true, formatCompUpdater:"CHECKAUTH"})));
    }

    // }
    componentDidUpdate (prevProps, prevState){
        console.log("в начале componentDidUpdate")
        if (this.state.formatCompUpdater ==="CHECKAUTH"){
            console.log("проверяем аутентификацию")
            const { cookieCheckJson, cookieIsloading } = this.state;
            console.log(cookieCheckJson)
            console.log(cookieIsloading)
            if(cookieIsloading){
                if (cookieCheckJson['StatusAuth']){
                    this.state.authState = true
                    this.props.updateData(this.state.authState)

                    this.props.history.push('/jobinfo/'+cookieCheckJson['Token'])
                }
            }

        }
        else{
            let token = "false"
            if (this.nameTextInput) {
                console.log(this.nameTextInput.value)
                console.log("Присвоили адекватное значение переменной")
                token = this.nameTextInput.value
                // this.state.realtoken = this.nameTextInput

            }
            if (token != '') {

                let url = 'http://127.0.0.1:9000/' + token + '/checktoken'
                console.log("Дошли до fetcj")
                console.log(url)

                fetch(url, {  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: "include"})
                    .then((response) => response.json())
                    .then((json => this.setState({json: json, isLoading: true})));
            }

            const { json, isLoading } = this.state;
            console.log("Дошли до условия роута")
            console.log(json)
            try {
                if (json['Status']) {
                    token = json['Token']
                    console.log("Тут мы в точке роута")
                    console.log(token)
                    //TODO исправить. в данном случае мы редиректим с готовой авторизацией
                    this.state.authState = true
                    this.props.updateData(this.state.authState)
                    this.props.history.push('/jobinfo/'+token)

                } else {
                    console.log("В точке где обнуляем переменную")
                    this.nameTextInput.value = '';
                    ReactDOM.findDOMNode(this.nameTextInput).focus();
                }
            }catch (err){
                if (this.state)
                    console.log(err)
                console.log("Ловим багу которую нужно будет исправить")
                this.nameTextInput.value = '';
                ReactDOM.findDOMNode(this.nameTextInput).focus();
            }

        }


        console.log("конец ф-ции componentDidUpdate")


    }
    render (){
        const { classes } = this.props;

        let stat = this.state.isLoading;

        let h2
        if (typeof(stat) != "undefined") {
            if (stat) {
                h2 =<div className="col-md-1 col-md-offset-1">
                    <Typography
                        className="row"
                        gutterBottom
                        variant="title"
                    >
                        Авторизация прошла неуспешно, повторите попытку.
                        Не знаешь где взять токен?тебе сюда -
                    </Typography>
                      <Link to="/startjob">ссылка</Link>

                </div>
            } else {
                h2 = <div className="col-md-2 col-md-offset-1">
                    <CircularProgress />
                </div>
            }
        }

        return (
            <div className="row">
                <ButtonAppBar AuthStatus={this.state.authState}/>
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    <Grid className={classes.interText} item xs={12}>
                            <Typography align="center" variant="h4">Вход</Typography>
                        <br/>
                            <Typography
                                className="row"
                                gutterBottom
                                variant="title"
                            >
                                Введите свой токен для проверки
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                        <TextField  id="standard-basic" label="Вставьте токен" inputRef={(ref) => this.nameTextInput = ref}/>
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                        <div className="col-md-4">
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.handleClick}>
                                Войти
                            </Button>
                        </div>
                        <br/>
                        {h2}
                    {/*</Grid>*/}
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