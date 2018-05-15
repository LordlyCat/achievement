import React from 'react';
import ReactDOM from 'react-dom';
import Index from './home/Home.js';
import Choose from './choose/Choose.js';
import Course from './course/course.js';
import MyAchievement from './myAchievement/myAchievement.js';
import ClassAchievement from './classAchievement/classAchievement.js';
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
            <Route path="/myAchievement" component={MyAchievement} />
            <Route path="/classAchievement" component={ClassAchievement} />
        </Switch>
    </Router>,
    document.querySelector('#root')
);

// let home = document.querySelector('#root');
// setTimeout(() => {
//     home.style.marginLeft = '0';
// }, 200);
registerServiceWorker();