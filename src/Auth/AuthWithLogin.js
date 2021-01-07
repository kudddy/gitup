import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {withRouter, Link} from 'react-router-dom'
//css
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import {CircularProgress, createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        body1: {
            fontWeight: 1000, // or 'bold'
            fontSize:60
        }
    }
})


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
            people: []
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){
        if (this.nameTextInput !== null) {

            this.setState({
                json: [],
                isLoading: false,

            });
        }
    }
    componentDidMount () {
        ReactDOM.findDOMNode(this.nameTextInput).focus();
    }

    // }
    componentDidUpdate (prevProps, prevState){
        console.log("в начале componentDidUpdate")
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

            fetch(url)
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

                this.props.history.push('/jobinfo/'+token)

            } else {
                console.log("В точке где обнуляем переменную")
                this.nameTextInput.value = '';
                ReactDOM.findDOMNode(this.nameTextInput).focus();
            }
        }catch (err){
            console.log(err)
            console.log("Ловим багу которую нужно будет исправить")
            this.nameTextInput.value = '';
            ReactDOM.findDOMNode(this.nameTextInput).focus();
        }


        console.log("конец ф-ции componentDidUpdate")


    }
    render (){
        let stat = this.state.isLoading;
        console.log("Точка входа в ф-цию рендер, смотрим stat")
        console.log(stat)
        let h2
        if (typeof(stat) != "undefined") {
            if (stat) {
                // h2 = <h2>Авторизация прошла неуспешно, повторите попытку</h2>;
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
                    {/*<h4>Введите свой токен для проверки</h4>*/}
                </div>
            } else {
                h2 = <div className="col-md-2 col-md-offset-1">
                    <CircularProgress />
                </div>
            }
        }

        return (
            <div className="row">
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    <Grid item xs={12}>
                        {/*<Box fontWeight="fontWeightBold">*/}
                        <div className="col-md-7 col-md-offset-1">
                        <ThemeProvider theme={theme}>
                            <Typography align="center" variant="h4">Вход</Typography>
                        </ThemeProvider>
                        </div>
                        <br/>
                        <div className="col-md-3 col-md-offset-1">

                            <Typography
                                className="row"
                                gutterBottom
                                variant="title"
                            >
                                Введите свой токен для проверки
                            </Typography>

                            {/*<h4>Введите свой токен для проверки</h4>*/}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                        <input type="text" placeholder="Enter token" ref={(ref) => this.nameTextInput = ref}
                               className="form-control"/>
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                        <div className="col-md-4">
                            <br/>
                            <button type="button" className="btn btn-success" onClick={this.handleClick}>Далее</button>
                        </div>
                        <br/>
                        {h2}
                    {/*</Grid>*/}
                </Grid>

            </div>
        );
}
}

export default withRouter(Auth)
