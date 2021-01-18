import React from 'react';
import './index.css';
import {withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box, Card, CircularProgress} from '@material-ui/core';
import ButtonAppBar from '../HeaderComponent/Navigation'
import {red} from "@material-ui/core/colors";

//тест с пейпером
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";

// тест с кастомным стилем
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
//qqsss
const useStyles = (theme) => ({
    root: {
        minWidth: 275,
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        background:"#333"

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        // fontSize: 14,
        color:"#fff"
    },
    pos: {
        marginBottom: 12,
    },
});

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
        // йо
        const { classes } = this.props;
        // баг с первым заходом на редирект
        const { json, isLoading } = this.state;

        // инициализация кнопки
        let button
        if (json['Status'] == "FINISH" || json['Status'] == "JOB NOT START YET"){
            button = <Button variant="contained" color="primary" onClick={this.HandleClickOn}>Start Job</Button>

        }
        else{
            button = <Button variant="contained" color="primary"onClick={this.HandleClickOf}>Stop Job</Button>
        }

        if (!isLoading){
            return (<div className="row">
                <ButtonAppBar />

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

                    <ButtonAppBar AuthStatus={true}/>
                    <br />
                    {/*<Grid container spacing={1} >*/}
                    {/*    <Grid item xs={6} sm={4}>*/}
                    {/*        <Card className={classes.root}>*/}
                    {/*            <CardContent>*/}
                    {/*                <Typography className={classes.title} color="textSecondary" gutterBottom>*/}
                    {/*                    Все о резюме*/}
                    {/*                </Typography>*/}
                    {/*                <Typography variant="h5" component="h2">*/}
                    {/*                    Хочешь заказать резюме?*/}
                    {/*                </Typography>*/}
                    {/*            </CardContent>*/}
                    {/*            <CardActions>*/}
                    {/*                <Button size="small">Нажми сюда</Button>*/}
                    {/*            </CardActions>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                <Grid container spacing={1} direction="column" justify="center" alignItems="center">

                    <Grid  item xs={10} sm={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                                    Статистика работы приложения
                                </Typography>
                                <Typography className={classes.title} variant="body2" component="p">
                                    Вы добавили: {json['CountFriendAdd']}
                                    <br />
                                    Вас добавили: N/A(подсвечиваем что пока в разработке)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid  item xs={10} sm={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                                    Статус работы скрипта
                                </Typography>
                                <Typography className={classes.title} variant="body2" component="p">
                                    Статус: {json['Status']}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {button}
                            </CardActions>
                        </Card>
                            </Grid>
                    {/*<Grid  item xs={6} sm={4}>*/}
                    {/*    <Card className={classes.root}>*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography className={classes.title} color="textSecondary" gutterBottom>*/}
                    {/*                Статус сервисов*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" component="p">*/}
                    {/*                OK*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*        <CardActions>*/}
                    {/*            <Button size="small">Learn More</Button>*/}
                    {/*        </CardActions>*/}
                    {/*    </Card>*/}
                    {/*</Grid>*/}

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