import React, {
    Component
} from 'react';
import Animation from '../animation.js';
import './myAchievement.css';

class UserHead extends Component {
    render() {
        return (<div className="userHead">
                    <div className="headImg">
                        <img src="" alt=""/>
                    </div>
                    <p className="userName">00000000000</p>
                    <p className="personalRank">个人总成绩排名：第<span>001</span>名</p>
                    <p className="GPA">当前学习绩点：<span>A+</span></p>
                    <div className="continue"></div>
                    <div className="classBtn"></div>
                </div>);
    }
}

class Rank extends Component {
    render() {
        return (<div className="rank">
                    <div className="rankBox rankTitle">
                        
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>0/17</span>
                        <span>第1名</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>0/17</span>
                        <span>第1名</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>0/17</span>
                        <span>第6666名</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>0/17</span>
                        <span>第129名</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>0/17</span>
                        <span>第98876名</span>
                    </div>
                </div>)
    }
}


class MyAchievement extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        return (<div id="myAchievement">
                    <UserHead />
                    <Rank />
                </div>);
    }
}

export default MyAchievement;