import React, {
    Component
} from 'react';
import './classAchievement.css';
import Animation from '../animation.js';
import averageGrade from '../averageGrade.js';
import {
    Rank
} from '../myAchievement/myAchievement.js';
import ajax from '../Ajax.js';

class ClassHead extends Component {
    constructor() {
        super();
        this.continueStudy = this.continueStudy.bind(this);
        this.goToMy = this.goToMy.bind(this);
    }
    continueStudy() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = '课程选择';
            window.location.href = '#choose';
        }, 600);
    }
    goToMy() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = '我的成绩单';
            window.location.href = '#myAchievement';
        }, 600);
    }
    render() {
        let rankObj = JSON.parse(localStorage.getItem('rank')).data;
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        if (user["class"].toString() === '0') {
            alert(`温馨提示：
            还未加入班级哦！快去重邮小帮手绑定个人信息吧～`);
        }
        return (<div className="userHead">
                    <div className="headImg">
                        <img src={user["headimg_url"]} alt=""/>
                    </div>
                    <p className="userName">{user["nickname"]}</p>
                    <p className="personalRank">{user["collage"] + '/' + user["class"]}</p>
                    <p className="GPA">我的班级总成绩排名：第<span>{rankObj["class"]}</span>名</p>
                    <p className="GPA">当前平均绩点：<span>{averageGrade().userGrade}</span></p>
                    <div className="classBtnWrapper">
                        <div className="continue" onClick={this.continueStudy}></div>
                        <div className="classBtn" onClick={this.goToMy}></div>
                    </div>
                </div>);
    }
}


class classAchievement extends Component {
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
        document.title = "班级成绩单";
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        let rankObj = JSON.parse(localStorage.getItem('rank')).data;
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        let courseNumber = JSON.parse(localStorage.getItem('courseNumber')).data;
        return (<div id="classAchievement">
                    <ClassHead />
                    <Rank rank={rankObj["classData"]}
                    finished={user["class_condition"]}
                    courseNumber={courseNumber}/>
                </div>);
    }
}

export default classAchievement;