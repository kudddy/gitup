import React from 'react';
import './index.css';
import {withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Card, CircularProgress} from '@material-ui/core';
import {red} from "@material-ui/core/colors";

//тест с пейпером
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";

// тест с кастомным стилем
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
//qqsss
import Cookies from 'universal-cookie';
const useStyles = theme => ({
    rootStatistic: {
        minWidth: 100,
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        background:"linear-gradient(to bottom, #203025 0%, #151516 100%)",
        minHeight:700,
        alignItems:"center",
        display:"flex",
        padding: 20

    },
    rootStartJob: {
        minWidth: 100,
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        background:"linear-gradient(225deg, #1623A6 0%, #3343D4 29%, #175EAC 73%, #176682 100%)",
        minHeight:700,
        alignItems:"center",
        display:"flex",

    },
    testOne :{
        display:"flex",
        minHeight:700,
        minWidth: 100,
        borderRadius:15,
        background:"linear-gradient(225deg, #1623A6 0%, #3343D4 29%, #175EAC 73%, #176682 100%)",
    },
    testTwo :{
        display:"grid",
        minHeight:700,
        minWidth: 100,
        borderRadius:15,
        background:"linear-gradient(to bottom, #203025 0%, #151516 100%)",

    },
    testThere :{
        display:"grid",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        // fontSize: 14,
        color:"#fff",
        lineHeight:1.19048,
        fontWeight:600,
        letterSpacing:".011em",
        fontFamily:"SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"


    },
    mainText:{
        fontSize:50,
        lineHeight:1.05,
        fontWeight:700,
        letterSpacing:"-.015em",
        fontFamily:"SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
    },
    pos: {
        marginBottom: 12,
    },
    button:{
        justifyContent: 'center'
    }
});



const cookies = new Cookies();

class JobStatus extends React.Component {
    constructor(props) {
        super(undefined);

        this.state = {
            json: [],
            isLoading: false,
            status: false,
        }
        this.HandleClickOn = this.HandleClickOn.bind(this);
        this.HandleClickOf = this.HandleClickOf.bind(this);
    }
    async HandleClickOn (){

        //this.StartJob()
        let url = process.env.REACT_APP_BACKEND_ADR + this.getToken() + '/start/addfriend'
        console.log("Дошли до fetcj")
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json => this.setState({json: json, isLoading: true})));
    }
    async HandleClickOf (){


        console.log("Кликнули стартовать задачу")
        //this.StartJob()
        let url = process.env.REACT_APP_BACKEND_ADR + this.getToken() + '/stop/addfriend'

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


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.props.updateData(true)
    // }

    componentDidMount() {
        const cookie = window.location.href.toString().split("&")[1];

        cookies.set('example-github-app', cookie, { path: '/' });


        this.timer = setInterval(() => this.getJobStatus(), 1000 * 3)


    }

    componentWillUnmount(){
        this.setState({lifeComp:false})
        clearInterval(this.timer);
    }



    getToken(){
        let topicId
        try {
            topicId = this.props.match.params
        } catch (err) {
            topicId = false
        }

        let token = topicId['topicId'].split("&")[0]
        return token
    }

    async getJobStatus() {
        let token = this.getToken()
        let url = process.env.REACT_APP_BACKEND_ADR + token + '/jobstatusbytoken'
        this.props.updateData(true)
        fetch(url, {
            credentials: "include"})
            .then((response) => response.json())
            .then((json => this.setState({json: json, isLoading: true, status:token}))).catch((e)=>
        {
            this.props.history.push('/')
            this.props.updateData(false)
        }

            );



    }
    render (){
        // йо
        const { classes } = this.props;
        // баг с первым заходом на редирект
        const { json, isLoading } = this.state;

        // инициализация кнопки
        let button
        if (json['Status'] === "FINISH" || json['Status'] === "JOB NOT START YET"){
            button = <Button variant="contained" color="primary" onClick={this.HandleClickOn}>Start Job</Button>

        }
        else{
            button = <Button variant="contained" color="primary"onClick={this.HandleClickOf}>Stop Job</Button>
        }

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

                <div className="row" >

                    <br />


                <Grid container spacing={3} direction="row">

                    <Grid  item sm={12} md={6} lg={4}>

                        {/*<Card className={classes.rootStatistic} >*/}
                            <Card className={classes.testOne}>
                                {/*grid-item large-span-6 small-span-12 grid-item-speed animate*/}
                                {/*grid-item large-span-4 medium-span-6 small-span-12*/}
                            <CardContent className={classes.testThere}>
                                {/*<CardHeader title="Shrimp and Chorizo Paella" style={{ textAlign: 'center' }}/>*/}
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom justify="center" alignItems="center">
                                    Статистика работы приложения
                                </Typography>

                                <Typography className={classes.mainText} align="center" variant="caption" justify="center" alignItems="center">
                                    Вы добавили: {json['CountFriendAdd']}
                                    <br />
                                    Вас добавили: {0}
                                </Typography>
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom >
                                    Детальная статика по кол-ву добавленых ботом аккаунтов
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid  item  sm={12} md={6} lg={8} >
                        {/*<Card className={classes.rootStartJob}>*/}
                        {/*grid-item large-span-8 medium-span-6 small-span-12 grid-item-battery animate*/}
                        <Card className={classes.testTwo}>
                            <CardContent className={classes.testThere}>
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                                    Статус работы бота
                                </Typography>
                                <Typography className={classes.mainText} variant="body2" component="p">
                                    Статус: {json['Status']}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.button}>
                                {button}
                            </CardActions>
                        </Card>
                            </Grid>

                </Grid>

            </div>

                    );
        }


    }
}

JobStatus.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(withRouter(JobStatus))