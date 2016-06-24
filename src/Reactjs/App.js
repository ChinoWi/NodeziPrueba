import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router,Route,IndexRoute} from 'react-router';

//Layout
import App from './layout/index.jsx';
//Component
import ViewHome from './view/Home/home'
import ViewInformacion from './view/Informacion/informacion';
import ViewPreguntas from './view/Preguntas/preguntas';
import TodoApp1 from './view/Contactenos/contactenos'
import PageNotFound from './view/Error/404';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={ViewHome}></IndexRoute>
            <Router path="/" component={ViewHome}></Router>
            <Router path="Informacion" component={ViewInformacion}></Router>
            <Router path="Contactenos" component={TodoApp1}></Router>
            <Router path="Preguntas" component={ViewPreguntas}></Router>
            <Router path="Blog"></Router>
        </Route>
        <Route path="*" component={PageNotFound} />
    </Router>
),document.getElementById('react_app'));
