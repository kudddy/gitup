import React from "react";
import Auth from './Auth/AuthWithLogin';
import JobStatus from './MainPageJobRender/JobRender';
import About from './About/MainAbout';
import HowTo from './HowTo/HowToMain';
import {
    BrowserRouter as Router,
    Switch,
    Route, withRouter,
} from "react-router-dom";
import {withStyles} from "@material-ui/styles";

// export default function App() {
//   return (
//       <Router>
//         <div>
//           <Switch>
//             <Route exact path="/">
//               <Auth />
//             </Route>
//               <Route path={"/jobinfo/:topicId"}>
//                   <JobStatus />
//               </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//               <Route path="/howto">
//                   <HowTo />
//               </Route>
//
//           </Switch>
//         </div>
//       </Router>
//   );
// }
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
                    <Switch>
                        <Route exact path="/">
                            <Auth updateData={this.updateData}/>
                        </Route>
                        <Route path={"/jobinfo/:topicId"}>
                            <JobStatus />
                        </Route>
                        <Route path="/about">
                            <About AuthStatus={this.state.authState}/>
                        </Route>
                        <Route path="/howto">
                            <HowTo AuthStatus={this.state.authState}/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;




function Job() {
//йо
  return <h2>Экран с детализацией статуса работы job и статистики</h2>;
}


