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
            document.title = '课程选择';
            window.location.href = '#choose';
        }, 600);
    }
    goToClass() {
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        if (user["class"].toString() === '0') {
            alert(`温馨提示：
                还未加入班级哦！快去重邮小帮手绑定个人信息吧～`);
            return;
        }
        Animation.quitPage();
        setTimeout(() => {
            document.title = '班级成绩单';
            window.location.href = '#classAchievement';
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
        console.log(this.props.finished)
        return (<div className="rank">
                    <div className="rankBox rankTitle">
                        
                    </div>
                    <div className="rankBox plates">
                        <span>重庆讲话精神</span>
                        <span>{this.props.finished["xi_speech"].slice(0, 4) + '/' + this.props.courseNumber["classic_stories"]}</span>
                        <span>{"第" + this.props.rank["xi_speech"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span>十九大报告</span>
                        <span>{this.props.finished["report_19th"].slice(0, 4) + '/' + this.props.courseNumber["report_19th"]}</span>
                        <span>{"第" + this.props.rank["report_19th"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span>“四个全面”</span>
                        <span>{this.props.finished["four_comprehensives"].slice(0, 4) + '/' + this.props.courseNumber["four_comprehensives"]}</span>
                        <span>{"第" + this.props.rank["four_comprehensives"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span>“中国梦”</span>
                        <span>{this.props.finished["china_dream"].slice(0, 4) + '/' + this.props.courseNumber["china_dream"]}</span>
                        <span>{"第" + this.props.rank["china_dream"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span>“青年工作”</span>
                        <span>{this.props.finished["youth_work"].slice(0, 4) + '/' + this.props.courseNumber["youth_work"]}</span>
                        <span>{"第" + this.props.rank["youth_work"] + "名"}</span>
                    </div>
                    <div className="rankBox plates">
                        <span>故事典故</span>
                        <span>{this.props.finished["classic_stories"].slice(0, 4) + '/' + this.props.courseNumber["classic_stories"]}</span>
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
            url: 'https://wx.idsbllp.cn/game/youth_report2019/index.php/Home/User/getInfo',
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
            url: 'https://wx.idsbllp.cn/game/youth_report2019/index.php/Home/User/getPersonalRank',
            method: 'POST',
            data: `openid=${openID}`,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                localStorage.setItem('rank', data);
            }
        })
    }
    componentDidMount() {
        document.title = "我的成绩单";
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