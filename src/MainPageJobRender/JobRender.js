import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Link, useParams, withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from '@material-ui/core';

class JobStatus extends React.Component {
    constructor(props) {
        super(undefined);

        this.state = {
            json: [],
            isLoading: false,
            status: false
        }
        this.HandleClickOn = this.HandleClickOn.bind(this);
        this.HandleClickOf = this.HandleClickOf.bind(this);
    }
    async HandleClickOn (){

        //this.StartJob()
        let url = 'http://127.0.0.1:9000/' + this.getToken() + '/start/addfriend'
        console.log("Дошли до fetcj")
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json => this.setState({json: json, isLoading: true})));
    }
    async HandleClickOf (){


        console.log("Кликнули стартовать задачу")
        //this.StartJob()
        let url = 'http://127.0.0.1:9000/' + this.getToken() + '/stop/addfriend'

        console.log("Дошли до fetcj")
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json => this.setState({json: json, isLoading: true})));
    }


    handleBack = () => {
        this.probs.history.goBack()
    }
    handleForward = () => {
        console.log(this.props.history)
        this.probs.history.go(+1)
    }


    componentDidMount() {
        this.timer = setInterval(() => this.getJobStatus(), 1000 * 3)
    }

    // componentDidUpdate(){
    //     console.log("Мы в componentDidUpdate и непонятно что делать")
    // }


    getToken(){
        let topicId
        try {
            topicId = this.props.match.params
            console.log(topicId['topicId'])
            console.log("Зашли в трай")
        } catch (err) {
            console.log("Зашли в catch")
            topicId = false
        }
        console.log("Смотрим что передали в функцию JOB getMovies")
        console.log(topicId['topicId'])

        let token = topicId['topicId']
        return token
    }

    async getJobStatus() {
        let token = this.getToken()
        let url = 'http://127.0.0.1:9000/' + token + '/jobstatusbytoken'
        console.log("Дошли до fetcj")
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json => this.setState({json: json, isLoading: true, status:token})));

    }



    render (){
        // баг с первым заходом на редирект
        const { json, isLoading } = this.state;
        console.log("Проверяем json в ренедере")
        console.log(json)
        console.log(isLoading)
        // инициализация кнопки
        let button
        if (json['Status'] == "FINISH" || json['Status'] == "JOB NOT START YET"){
            button = <button type="button" className="btn btn-success" onClick={this.HandleClickOn}>Start Job</button>;
        }
        else{
            button = <button type="button" className="btn btn-success" onClick={this.HandleClickOf}>Stop Job</button>;
        }
        // инициализация шапки
        let title

        title =<Typography className="row" gutterBottom variant="h5">
            Экран с детализацией статуса работы job и статистики
        </Typography>

        if (!isLoading){
            return (<div className="row">

                {/*<Typography*/}
                {/*    className="row"*/}
                {/*    gutterBottom*/}
                {/*    variant="title"*/}
                {/*>*/}
                {/*    Экран с детализацией статуса работы job и статистики*/}
                {/*</Typography>*/}
                {title}
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    {/*<h2>Экран с детализацией статуса работы job и статистики</h2>*/}
                    <Grid item xs={12}>
                        <div className="col-md-1 col-md-offset-1">
                            {/*<Typography*/}
                            {/*    className="row"*/}
                            {/*    gutterBottom*/}
                            {/*    variant="title"*/}
                            {/*>*/}
                            {/*    Загрузка*/}
                            {/*</Typography>*/}
                            <CircularProgress />

                            {/*<h4>Введите свой токен для проверки</h4>*/}
                        </div>
                    </Grid>
                </Grid>

            </div>);
        } else {
            return (<div className="row">
                {/*<Typography*/}
                {/*    className="row"*/}
                {/*    gutterBottom*/}
                {/*    variant="title"*/}
                {/*>*/}
                {/*    Экран с детализацией статуса работы job и статистики*/}
                {/*</Typography>*/}
                {title}
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    {/*<h2>Экран с детализацией статуса работы job и статистики</h2>*/}
                    <Grid item xs={12}>
                        <div className="col-md-1 col-md-offset-1">
                            <Typography
                                className="row"
                                gutterBottom
                                variant="title"
                            >
                                Статус: {json['Status']}
                            </Typography>

                            {/*<LinearProgress />*/}
                            {/*<LinearProgress color="secondary" />*/}
                        </div>
                    </Grid>
                    {/*<h2>Статус: {json['Status']}</h2>*/}
                    <br />
                    {button}
                </Grid>

            </div>);
        }


    }
}

export default withRouter(JobStatus)