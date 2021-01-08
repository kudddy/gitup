import React from "react";
import Auth from './Auth/AuthWithLogin';
import JobStatus from './MainPageJobRender/JobRender';
import SideBar from './Chat.js';
import About from './About/MainAbout';
import HowTo from './HowTo/HowToMain';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            {/*<li>*/}
            {/*  <Link to="/">Home</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <Link to="/about">Чуть чуть о сервисе</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <Link to="/checktoken">Проверить токен</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <Link to="/startjob">Личный кабинет</Link>*/}
            {/*</li>*/}
          </ul>

          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            {/*<Route path={"/jobinfo/:topicId"} component={JobStatus}>*/}
            {/*  /!*<JobStatus />*!/*/}
            {/*</Route>*/}
              <Route path={"/jobinfo/:topicId"}>
                  <JobStatus />
              </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/check/:topicId">
             <SideBar />
            </Route>
              <Route path="/howto">
                  <HowTo />
              </Route>

            {/*<Route path="/checktoken">*/}
            {/*  <Home />*/}
            {/*</Route>*/}

            {/*<Route path="/startjob">*/}
            {/*  <Job />*/}
            {/*</Route>*/}

          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  // let info = activateLasers()
  return <h2>Основной экран</h2>;
}

function Check(){
    return (
        <MDBContainer>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                <MDBListGroup>
                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </MDBContainer>
    );
}

// function Job() {
//   // return <li>Экран с детализацией статуса работы job и статистики</li>;
//   return <h2>Экран с детализацией статуса работы job и статистики</h2>;
// }

// function About() {
//
//   return (
//       <ul>
//         {/*<li>*/}
//         {/*  <Link to="/">Home</Link>*/}
//         {/*</li>*/}
//         <li>
//           <Link to="/about">Чуть чуть о сервисе</Link>
//         </li>
//         <li>
//           <Link to="/checktoken">Проверить токен</Link>
//         </li>
//         <li>
//           <Link to="/startjob">Личный кабинет</Link>
//         </li>
//       </ul>
//   )
// }



function Job() {
  // return <li>Экран с детализацией статуса работы job и статистики</li>;
  // let { topicId } = useParams();
  // console.log("Смотрим что передали в функцию JOB")
  // console.log(topicId)
  return <h2>Экран с детализацией статуса работы job и статистики</h2>;
}

// function activateLasers(){
//   console.log('По кнопке кликнули');
//   return <h3>Идите на хуй</h3>;
// }
//
//
// function ClickButton(){
//   console.log('йо');
//   return <div><li>Сосни хуйца сам</li></div>;
// }

