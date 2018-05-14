import React, {
    Component
} from 'react';
import './home.css';
import prompt from '../img/prompt.png';

class Prompt extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('Clicked');
    }

    render() {
        return (<div id="prompt">
                    <img className="prompt" src={prompt} alt="提示" onClick={this.handleClick} />
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
        //alert('Personal');
        document.title = "我的成绩单";
        window.location.href = 'http://localhost:3000/my'
    }

    classAchievementClick() {
        alert('Class');
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
    }

    chooseClick(event) {
        window.location.href = 'http://localhost:3000/choose';
    }

    render() {
        return (<div id="choosePlate">
                    <div className="chooseWrapper">
                        <div className="plateBox boxOne" onClick={this.chooseClick}></div>
                        <div className="plateBox boxTwo" onClick={this.chooseClick}></div>
                        <div className="plateBox boxThree" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFour" onClick={this.chooseClick}></div>
                        <div className="plateBox boxFive" onClick={this.chooseClick}></div>
                        <div className="plateBox boxSix" onClick={this.chooseClick}></div>
                        <div className="cover"></div>
                    </div>
                </div>)
    }
}

// class Footer extends Component {
//     render() {
//         return (<div id="foot">
//                     <p>@红岩网校工作站</p>
//                 </div>)
//     }
// }

class Index extends Component {
    render() {
        return (<div id="home">
                    <Prompt />
                    <Achievement />
                    <ChoosePlate />
                </div>)
    }
}


export default Index;