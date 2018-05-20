import React, {
    Component
} from 'react';
import './choose.css';
import Animation from '../animation.js';

class CourseContainer extends Component {
    render() {
        return (<div className="courseWrapper">
                    <div className="courseBoard">
                        <CourseList number={215} />
                    </div>
                </div>)
    }
}

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        localStorage.setItem('course', e.target.id)
        Animation.quitPage();
        setTimeout(() => {
            //document.title = "我的成绩单";
            window.location.href = 'http://www.lordlycat:3000/course';
        }, 600);
    }

    render() {
        const number = this.props.number;
        const list = [];
        for (let i = 0; i < number; i++) {
            list.push(<div className="course" key={i} id={i + 1} onClick={this.handleClick}>{i + 1}</div>)
        }

        return (<ul>{list}</ul>)
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
            window.location.href = 'http://www.lordlycat:3000/myAchievement';
        }, 600);
    }

    backClick() {
        Animation.quitPage();
        setTimeout(() => {
            window.location.href = 'http://www.lordlycat:3000/index';
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
    componentDidMount() {
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