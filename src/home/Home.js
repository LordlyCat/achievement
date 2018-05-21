import React, {
    Component
} from 'react';
import './home.css';
import prompt from '../img/prompt.png';
import Animation from '../animation.js';

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
            window.location.href = 'myAchievement';
        }, 600);
    }

    classAchievementClick() {
        Animation.quitPage();
        setTimeout(() => {
            document.title = "班级成绩单";
            window.location.href = 'classAchievement';
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

// class Plate extends Component {
//     constructor(props) {
//         super(props);
//         this.chooseClick = this.chooseClick.bind(this);
//     }

//     chooseClick(event) {

//     }

//     render() {
//         return (<div className="plateBox">

//                 </div>)
//     }
// }

class ChoosePlate extends Component {
    constructor(props) {
        super(props);
        this.chooseClick = this.chooseClick.bind(this);
        if (!localStorage.getItem('plate')) {
            localStorage.setItem('plate', 0);
        }
    }

    chooseClick(event) {
        let index = 0;
        for (let i = 0; i < event.target.parentNode.children.length; i++) {
            if (event.target === event.target.parentNode.children[i]) {
                index = i;
                break;
            }
        }
        localStorage.setItem('plate', index);
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'choose';
        }, 600);
    }

    render() {
        return (<div id="choosePlate">
                    <div className="chooseWrapper">
                        <div className="plateBox boxOne" onClick={this.chooseClick}></div>
                        <div className="plateBox boxTwo" onClick={this.chooseClick}></div>
                        <div className="plateBox boxThree" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFour" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFive" onClick={this.chooseClick}></div>
                        <div className="plateBox boxSix"></div>
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