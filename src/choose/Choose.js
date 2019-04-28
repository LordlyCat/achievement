import React, {
    Component
} from 'react';
import './choose.css';
import Animation from '../animation.js';
import ajax from '../Ajax.js';

class CourseContainer extends Component {
    constructor() {
        super();
        // ajax({
        //     async: false,
        //     url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/index/getCourseList',
        //     success: (data) => {
        //         localStorage.setItem('courseNumber', data);
        //     }
        // })
        this.state = {
            plate: parseInt(localStorage.getItem('plate'))
        }
    }
    render() {
        let courseNumberObj = JSON.parse(localStorage.getItem('courseNumber')).data;
        let courseNumber = null;
        let userInformation = JSON.parse(localStorage.getItem('userInformation')).data;
        let finished = null;
        let unFinished = null;
        console.log(localStorage.getItem('userInformation'))
        switch (this.state.plate) {
            case 2:
                courseNumber = parseInt(courseNumberObj["report_19th"], 10);
                finished = parseInt(userInformation["user_condition"]["report_19th"], 10);
                break;
            case 5:
                courseNumber = parseInt(courseNumberObj["four_comprehensives"], 10);
                finished = parseInt(userInformation["user_condition"]["four_comprehensives"], 10);
                break;
            case 3:
                courseNumber = parseInt(courseNumberObj["china_dream"], 10);
                finished = parseInt(userInformation["user_condition"]["china_dream"], 10);
                break;
            case 1:
                courseNumber = parseInt(courseNumberObj["youth_work"], 10);
                finished = parseInt(userInformation["user_condition"]["youth_work"], 10);
                break;
            case 4:
                courseNumber = parseInt(courseNumberObj["classic_stories"], 10);
                finished = parseInt(userInformation["user_condition"]["classic_stories"], 10);
                break;
            case 6:
                courseNumber = parseInt(courseNumberObj["xi_speech"], 10);
                finished = parseInt(userInformation["user_condition"]["xi_speech"], 10);
                break;
            default:
                courseNumber = parseInt(courseNumberObj["report_19th"], 10);
                finished = parseInt(userInformation["user_condition"]["report_19th"], 10);
                break;
        }
        return (<div className="courseWrapper">
                    <div className="courseBoard">
                        <CourseList finished={finished} courseNumber={courseNumber}/>
                    </div>
                    <div className="newT">学习内容持续更新中</div>
                </div>)
    }
}

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //let openid = 'ouRCyjhan0KtTLbEBqdpEgfdWYZI';
        let openid = JSON.parse(localStorage.getItem('userInformation')).data.openid;
        if (e.target.className == 'course unfinished') {
            localStorage.setItem('course', e.target.id);
            if (e.target.id > 1 && e.target.previousSibling.className !== 'course finished') {
                alert('前面还有未完成课程哦');
                return
            }
            let plate = '';
            switch (localStorage.getItem('plate')) {
                case '1':
                    plate = 'youth_work';
                    break;
                case '2':
                    plate = 'report_19th';
                    break;
                case '3':
                    plate = 'china_dream';
                    break;
                case '4':
                    plate = 'classic_stories';
                    break;
                case '5':
                    plate = 'four_comprehensives';
                    break;
                case '6':
                    plate = 'xi_speech';
                    break;
                default:
                    plate = 'report_19th';
                    break;
            }
            let ifContinue = true;
            ajax({
                async: false,
                method: 'POST',
                //url: 'https://wx.idsbllp.cn/game/youth_report2019/index.php/Home/Index/getCourseList',
                url: 'https://wx.idsbllp.cn/game/youth_report2019/index.php/Home/User/getTodayCourse',
                data: `openid=${openid}`,
                header: 'application/x-www-form-urlencoded',
                success: (data) => {
                    console.log('ddd', data);
                    if (JSON.parse(data).data[plate] == 3) {
                        ifContinue = false;
                    }
                }
            })
            if (false) { //!ifContinue
                alert('每门课程每天只能学习三节课哦！快去复习已学课程吧，温故知新、学习更有效～');
                return
            }
        }
        localStorage.setItem('course', e.target.id);
        localStorage.setItem('courseClassName', e.target.className);
        Animation.quitPage();
        setTimeout(() => {
            document.title = '课程学习';
            window.location.href = '#course';
        }, 600);
    }

    gotoNewX_1 = () => {
        window.location.href = 'http://epaper.cqrb.cn/html/ncb/2019-04/18/003/node.htm'
    }

    gotoNewX_2 = () => {
        window.location.href = 'http://epaper.cqrb.cn/html/ncb/2019-04/19/001/content_230032.htm'
    }

    render() {
        const finished = this.props.finished;
        const courseNumber = this.props.courseNumber;
        const list = [];
        let newX_1 = null;
        let newX_2 = null;
        console.log(window.location.href.split('#')[1])
        if (window.location.href.split('#')[1] === '/newX') {
            newX_1 = <div className="course unfinished" key={177} id={177} onClick={this.gotoNewX_1}>{courseNumber + 1}</div>
            newX_2 = <div className="course unfinished" key={188} id={188} onClick={this.gotoNewX_2}>{courseNumber + 2}</div>

        }
        for (let i = 0; i < finished; i++) {
            list.push(<div className="course finished" key={i} id={i + 1} onClick={this.handleClick}>{i + 1}</div>)
        }
        for (let i = finished; i < courseNumber; i++) {
            list.push(<div className="course unfinished" key={i} id={i + 1} onClick={this.handleClick}>{i + 1}</div>)
        }

        return (<ul>
                {list}
                {newX_1}
                {newX_2}
            </ul>)
    }

}

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.personalAchievementClick = this.personalAchievementClick.bind(this);
        this.classAchievementClick = this.backClick.bind(this);
    }

    personalAchievementClick() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = "我的成绩单";
            window.location.href = '#myAchievement';
        }, 600);
    }

    backClick() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = '青年学习成绩单';
            window.location.href = '#index?openid=' + JSON.parse(localStorage.getItem('userInformation')).data.openid;
        }, 600);
    }

    render() {
        return (<div id="btns">
                    <div className="chooseBtnWrapper">
                        <div className="btn" onClick={this.personalAchievementClick}></div>
                        <div className="btn" onClick={this.backClick}></div>
                    </div>
                </div>);
    }
}

class Choose extends Component {
    constructor() {
        super();
        //let openID = '123'
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
        })
    }
    componentDidMount() {
        localStorage.setItem('maxCourse', document.querySelectorAll('.course').length);
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        return (<div id="choose">
                    <CourseContainer />
                    <Buttons />
                </div>)
    }
}

export default Choose;