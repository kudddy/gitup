import {Link} from "react-router-dom";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    typography: {
        body1: {
            fontWeight: 1000, // or 'bold'
            fontSize:60,
            color:"#fff"
        }
    }
})

class About extends React.Component{
    handleBack = ()=>{
        this.probs.history.goBack()
    }
    handleForward = () =>{
        console.log(this.props.history)
        this.probs.history.go(+1)
    }
    render() {

        const redirect = () => {
            this.props.history.push('/howto')
        }
        let d = new Date();
        d.setTime(d.getTime() + (600000*60*1000));

        // cookie.set("onboarded", true, {path: "http://127.0.0.1:3000", expires: d});
        console.log("Смотрим, передали ли мы пропсы в HowTo")
        console.log(this.props.AuthStatus)
        //qj
        return (
            <div className="rowAbout">
                {/*<ButtonAppBar AuthStatus={this.props.AuthStatus}/>*/}
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    <Grid item xs={12}>
                        {/*<Box fontWeight="fontWeightBold">*/}
                        <div className="col-md-7 col-md-offset-1">
                            <ThemeProvider theme={theme}>
                                <Typography style={{color:"#fff"}} align="center" variant="h4">Что позволяет сервис?</Typography>
                            </ThemeProvider>
                        </div>
                        <br/>
                        <div className="col-md-3 col-md-offset-1">

                            <Typography
                                className="row"
                                gutterBottom
                                style={{color:"#fff"}}
                                variant="title"
                            >
                                Если тебе требуется накрутить подписчиков на github, то тебе сюда. <br/>
                                Для этого нужен персональный токен доступа к твоей учетной записи <br/>
                                Не волнуйся, если правильно задать область видимости, то у сервиса <br/>
                                будет доступ только к добавлению/удалению друзей.<br/>
                                Как настроить правильно зону видимости?&ensp;
                                <Link href="#" onClick={redirect}>
                                    Тут написано как
                                </Link>
                            </Typography>

                            {/*<h4>Введите свой токен для проверки</h4>*/}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }


}

export default About;