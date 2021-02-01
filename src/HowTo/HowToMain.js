import React from "react";
import Grid from "@material-ui/core/Grid";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
//qq
const theme = createMuiTheme({
    typography: {
        body1: {
            fontWeight: 1000, // or 'bold'
            fontSize:60,
            color:"#fff"
        }
    }
})


class HowTo extends React.Component{
    render() {


        console.log("Смотрим, передали ли мы пропсы в HowTo")
        console.log(this.props.AuthStatus)
        return (
            <div className="rowAbout">
                {/*<ButtonAppBar AuthStatus={this.props.AuthStatus}/>*/}
                <Grid container direction="column" alignItems="center"
                      spacing={0}
                      justify="center"
                      style={{ minHeight: '60vh' }}>
                    <Grid item xs={12}>
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
                                1. Зайди под свой учеткой <br/>
                                2. Настрой токен

                            </Typography>

                        </div>
                    </Grid>
                </Grid>
            </div>
        )

    }
}

export default HowTo;