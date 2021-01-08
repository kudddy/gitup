import {Link, useHistory} from "react-router-dom";
import React from "react";
import ButtonAppBar from '../HeaderComponent/Navigation'
import Grid from "@material-ui/core/Grid";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    typography: {
        body1: {
            fontWeight: 1000, // or 'bold'
            fontSize:60
        }
    }
})

export default function About() {
    let history = useHistory();

    const redirect = () => {
        history.push('/howto')
    }

    return (
        <div className="rowAbout">
            <ButtonAppBar />
            <Grid container direction="column" alignItems="center"
                  spacing={0}
                  justify="center"
                  style={{ minHeight: '60vh' }}>
                <Grid item xs={12}>
                    {/*<Box fontWeight="fontWeightBold">*/}
                    <div className="col-md-7 col-md-offset-1">
                        <ThemeProvider theme={theme}>
                            <Typography align="center" variant="h4">Что позволяет сервис?</Typography>
                        </ThemeProvider>
                    </div>
                    <br/>
                    <div className="col-md-3 col-md-offset-1">

                        <Typography
                            className="row"
                            gutterBottom
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