import React from "react";
import Auth from './Auth/AuthWithLogin';
import JobStatus from './MainPageJobRender/JobRender';
import About from './About/MainAbout';
import HowTo from './HowTo/HowToMain';
import GetVacancy from "./Vacancy/GetVacancy";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ButtonAppBar from "./HeaderComponent/Navigation";

class App extends React.Component{
    state = {
        authState: false
    };
    updateData = (value) => {
        this.setState({ authState: value })
    }
    render() {
        console.log("Смотрим что в стайте в корневом аппе")
        console.log(this.state.authState)
        return (

            <Router>
                <div>
                    <ButtonAppBar AuthStatus={this.state.authState} updateData={this.updateData}/>
                    <Switch>
                        <Route exact path="/">
                            <Auth updateData={this.updateData}/>
                        </Route>
                        <Route path={"/jobinfo/:topicId"}>
                            <JobStatus updateData={this.updateData}/>
                        </Route>
                        <Route path="/about">
                            <About AuthStatus={this.state.authState}/>
                        </Route>
                        <Route path="/howto">
                            <HowTo AuthStatus={this.state.authState}/>
                        </Route>
                        <Route path="/vacancy">
                            <GetVacancy />
                        </Route>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;






