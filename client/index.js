import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import UrlPage from './container/UrlPage';
import CustomUrlPage from './container/CustomUrlPage';
import RedirectPage from './container/RedirectPage';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

/*ReactDOM.render((
    <Router history={ hashHistory }>
        <Route path="/" component={ App }/>
        <Route path="/url" component={ UrlPage }/>
        <Route path="/custom" component={ CustomUrlPage }/>
        <Route path="/:id" component={ CustomUrlPage }/>
    </Router>
), document.getElementById('root'));*/

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ App }/>
        <Route path="/url" component={ UrlPage }/>
        <Route path="/custom" component={ CustomUrlPage }/>
        <Route path="/:id" component={ RedirectPage }/>
    </Router>
), document.getElementById('root'));

