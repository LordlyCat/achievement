import React, {
    Component
} from 'react';
import Animation from '../animation.js';
import ajax from '../Ajax.js';
import averageGrade from '../averageGrade.js';
import './myAchievement.css';

class UserHead extends Component {
    constructor() {
        super();
        this.continueStudy = this.continueStudy.bind(this);
        this.goToClass = this.goToClass.bind(this);
    }
    continueStudy() {
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'choose';
        }, 600);
    }
    goToClass() {
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'classAchievement';
        }, 600);
    }
    render() {
        let rankObj = JSON.parse(localStorage.getItem('rank')).data;
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        return (<div className="userHead">
                    <div className="headImg">
                        <img src={user["headimg_url"]} alt=""/>
                    </div>
                    <p className="userName">{user["nickname"]}</p>
                    <p className="personalRank">个人总成绩排名：第<span>{rankObj["personal"]}</span>名</p>
                    <p className="GPA">当前学习绩点：<span>{averageGrade().userGrade}</span></p>
                    <div className="myBtnWrapper">
                        <div className="continue" onClick={this.continueStudy}></div>
                        <div className="classBtn" onClick={this.goToClass}></div>
                    </div>
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
                        <span>{this.props.finished["report_19th"] + '/' + this.props.courseNumber["report_19th"]}</span>
                        <span>{"第" + this.props.rank["report_19th"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>{this.props.finished["four_comprehensives"] + '/' + this.props.courseNumber["four_comprehensives"]}</span>
                        <span>{"第" + this.props.rank["four_comprehensives"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>{this.props.finished["china_dream"] + '/' + this.props.courseNumber["china_dream"]}</span>
                        <span>{"第" + this.props.rank["china_dream"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>{this.props.finished["youth_work"] + '/' + this.props.courseNumber["youth_work"]}</span>
                        <span>{"第" + this.props.rank["youth_work"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span></span>
                        <span>{this.props.finished["classic_stories"] + '/' + this.props.courseNumber["classic_stories"]}</span>
                        <span>{"第" + this.props.rank["classic_stories"] + "名"}</span>
                    </div>
                </div>)
    }
}


class MyAchievement extends Component {
    constructor() {
        super();
        let openID = JSON.parse(localStorage.getItem('userInformation')).data.openid;
        //获取用户信息
        ajax({
            async: false,
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/User/getInfo',
            method: 'POST',
            data: 'openid=' + openID,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                localStorage.setItem('userInformation', data);
            }
        });
        //获取排行榜数据
        ajax({
            async: true,
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/User/getPersonalRank',
            method: 'POST',
            data: `openid=${openID}`,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                localStorage.setItem('rank', data);
            }
        })
    }
    componentDidMount() {
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        let rankObj = JSON.parse(localStorage.getItem('rank')).data;
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        let courseNumber = JSON.parse(localStorage.getItem('courseNumber')).data;
        return (<div id="myAchievement">
                    <UserHead />
                    <Rank rank={rankObj["personalData"]}
                    finished={user["user_condition"]}
                    courseNumber={courseNumber}/>
                </div>);
    }
}

export {
    MyAchievement,
    Rank
};