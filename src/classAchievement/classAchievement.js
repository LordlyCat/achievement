import React, {
    Component
} from 'react';
import './classAchievement.css';
import Animation from '../animation.js';
import {
    Rank
} from '../myAchievement/myAchievement.js';


class ClassHead extends Component {
    constructor() {
        super();
        this.continueStudy = this.continueStudy.bind(this);
        this.goToMy = this.goToMy.bind(this);
    }
    continueStudy() {
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'http://www.lordlycat:3000/choose';
        }, 600);
    }
    goToMy() {
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'http://www.lordlycat:3000/myAchievement';
        }, 600);
    }
    render() {
        return (<div className="userHead">
                    <div className="headImg">
                        <img src="" alt=""/>
                    </div>
                    <p className="userName">红小岩</p>
                    <p className="personalRank">传媒艺术学院／13901602班</p>
                    <p className="GPA">我的班级总成绩排名：第<span>12</span>名</p>
                    <p className="GPA">当前平均绩点：<span>A+</span></p>
                    <div className="classBtnWrapper">
                        <div className="continue" onClick={this.continueStudy}></div>
                        <div className="classBtn" onClick={this.goToMy}></div>
                    </div>
                </div>);
    }
}


class classAchievement extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        return (<div id="classAchievement">
                    <ClassHead />
                    <Rank />
                </div>);
    }
}

export default classAchievement;