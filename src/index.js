import React from 'react';
import ReactDOM from 'react-dom';
//import './home/home.css';
import Index from './home/Home.js';
import Choose from './choose/Choose.js';
import Course from './course/course.js';
import {
    BrowserRouter as Router,
    Route,
    //Link,
    Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Prompt />, document.querySelector('#prompt'));
// ReactDOM.render(<Achievement />, document.querySelector('#achievementBtn'));
// ReactDOM.render(<ChoosePlate path="/choose" />, document.querySelector('#choosePlate'));
// ReactDOM.render(<Footer />, document.querySelector('#foot'));

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/index" component={Index} />
            <Route path="/choose" component={Choose} />
            <Route path="/course" component={Course} />
        </Switch>
    </Router>,
    document.querySelector('#root')
);


registerServiceWorker();