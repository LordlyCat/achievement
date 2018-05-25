import React, {
    Component
} from 'react';
import './home.css';
import prompt from '../img/prompt.png';
import Animation from '../animation.js';
import ajax from '../Ajax.js';

class Prompt extends Component {
    render() {
        return (<div id="prompt">
                    <img className="prompt" src={prompt} alt="提示" onClick={this.props.show} />
                </div>)
    }
}

class Achievement extends Component {
    constructor(props) {
        super(props);
        this.personalAchievementClick = this.personalAchievementClick.bind(this);
        this.classAchievementClick = this.classAchievementClick.bind(this);
    }



    personalAchievementClick() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = "我的成绩单";
            window.location.href = '#myAchievement';
        }, 600);
    }

    classAchievementClick() {
        let user = JSON.parse(localStorage.getItem('userInformation')).data;
        if (user["class"].toString() === '0') {
            alert(`温馨提示：
                还未加入班级哦！快去重邮小帮手绑定个人信息吧～`);
            return;
        }
        Animation.quitPage();
        setTimeout(() => {
            document.title = "班级成绩单";
            window.location.href = '#classAchievement';
        }, 600);
    }

    render() {
        return (<div id="achievementBtn">
                    <div className="btnWrapper">
                        <div className="btn" onClick={this.personalAchievementClick}></div>
                        <div className="btn" onClick={this.classAchievementClick}></div>
                    </div>
                </div>);
    }
}

class ChoosePlate extends Component {
    constructor(props) {
        super(props);
        this.chooseClick = this.chooseClick.bind(this);
        this.goToGame = this.goToGame.bind(this);
        if (!localStorage.getItem('plate')) {
            localStorage.setItem('plate', 2);
        }
    }

    chooseClick(event) {
        let index = 0;
        for (let i = 0; i < event.target.parentNode.children.length; i++) {
            if (event.target === event.target.parentNode.children[i]) {
                index = i;
                switch (index) {
                    case 0:
                        index = 2;
                        break;
                    case 1:
                        index = 5;
                        break;
                    case 2:
                        index = 3;
                        break;
                    case 3:
                        index = 1;
                        break;
                    case 4:
                        index = 4;
                        break;
                    default:
                        // statements_def
                        break;
                }
                break;
            }
        }
        localStorage.setItem('plate', index);
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = '#choose';
        }, 600);
    }

    goToGame() {
        console.log('game');
        window.location.href = 'https://wx.idsbllp.cn/game/christmas-game2017/index.php/index/index/index';
    }

    render() {
        return (<div id="choosePlate">
                    <div className="chooseWrapper">
                        <div className="plateBox boxOne" onClick={this.chooseClick}></div>
                        <div className="plateBox boxTwo" onClick={this.chooseClick}></div>
                        <div className="plateBox boxThree" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFour" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFive" onClick={this.chooseClick}></div>
                        <div className="plateBox boxSix" onClick={this.goToGame}></div>
                        <div className="cover"></div>
                    </div>
                </div>)
    }
}

class PopUps extends Component {
    render() {
        return (<div className={this.props.className}>
                    <div className="shutdown" onClick={this.props.shutdown}></div>
                    <div className="popUps">
                        <p>产品设计：杨奇凡</p>
                        <p>视觉设计：邓文瑶</p>
                        <p>程序开发：卢帅 杨瑞鑫</p>
                        <p>指导老师：杨奇凡</p>
                        <p>出品：红岩网校工作站</p>
                    </div>
                </div>)
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.shutdown = this.shutdown.bind(this);
        this.showPopUps = this.showPopUps.bind(this);
        this.state = {
            className: 'unPopCover'
        }

    }
    shutdown(e) {
        this.setState({
            className: 'unPopCover'
        })
    }

    showPopUps(e) {
        this.setState({
            className: 'popCover'
        })
    }

    componentDidMount() {
        let openID = null;
        if (!sessionStorage.getItem('openid')) {
            openID = window.location.href.split('?')[1].split('=')[1];
        } else {
            openID = sessionStorage.getItem('openid');
        }
        sessionStorage.setItem('openid', openID);

        window.history.pushState({
            openid: 'getted'
        }, 'index', '#/index');

        //获取用户信息
        ajax({
            async: true,
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/User/getInfo',
            method: 'POST',
            data: 'openid=' + openID,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                localStorage.setItem('userInformation', data);
            }
        })
        //获取课程数量
        ajax({
            async: true,
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/index/getCourseList',
            method: 'GET',
            data: null,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                localStorage.setItem('courseNumber', data);
            }
        })
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

        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
    render() {
        return (<div id="home">
                    <Prompt show={this.showPopUps}/>
                    <Achievement />
                    <ChoosePlate />
                    <PopUps 
                    className={this.state.className}
                    shutdown={this.shutdown}/>
                </div>)
    }
}


export default Index;