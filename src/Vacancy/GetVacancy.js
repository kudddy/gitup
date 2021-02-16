import React from "react";
import Grid from "@material-ui/core/Grid";
import {Card, ThemeProvider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

// тест с кастомным стилем
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";

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
    thirdWindow :{
        display:"grid",
        minHeight:700,
        minWidth: 100,
        borderRadius:15,
        background:"linear-gradient(-217deg, #621e8f 16%, #762ca6 56%, #cf6e88 99%)",
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


class GetVacancy extends React.Component{
    render() {


        console.log("Смотрим, передали ли мы пропсы в HowTo")
        console.log(this.props.AuthStatus)
        const { classes } = this.props;

        const buttonGetVacancy = <Button variant="contained" color="primary" onClick={event =>  window.location.href='/vacancy'}>Получить рекомендации</Button>
        return (
            <div className="row" >

                <br />


                {/*<Grid container spacing={4} direction="row">*/}

                    <Grid  item  sm={12} md={12} lg={12} >
                        {/*<Card className={classes.rootStartJob}>*/}
                        {/*grid-item large-span-8 medium-span-6 small-span-12 grid-item-battery animate*/}
                        <Card className={classes.thirdWindow}>
                            <CardContent className={classes.testThere}>
                                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                                    Наиболее подходящая вакансия согласно вашему профилю на github
                                </Typography>
                                {/*<div dangerouslySetInnerHTML={text} />*/}
                                <Typography className={classes.mainText} variant="h4" component="p">
                                    Получите больше приглашений на интервью
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.button}>
                                {buttonGetVacancy}
                            </CardActions>
                        </Card>
                    </Grid>

                {/*</Grid>*/}

            </div>
        )

    }
}

GetVacancy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(withRouter(GetVacancy))