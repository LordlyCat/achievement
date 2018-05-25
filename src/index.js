import React from 'react';
import ReactDOM from 'react-dom';
import Index from './home/Home.js';
import Choose from './choose/Choose.js';
import Course from './course/course.js';

import {
    MyAchievement
} from './myAchievement/myAchievement.js';
import ClassAchievement from './classAchievement/classAchievement.js';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

let myRoot = document.querySelector('#root');
ReactDOM.render(
    <Router basename="">
        <Switch>
            <Route path="/index" component={Index} />
            <Route path="/choose" component={Choose} />
            <Route path="/course" component={Course} />
            <Route path="/myAchievement" component={MyAchievement} />
            <Route path="/classAchievement" component={ClassAchievement} />
        </Switch>
    </Router>,
    myRoot
);

var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
    var opened = window.open('about:blank', '_self');
    opened.opener = null;
    opened.close();
}

//registerServiceWorker();