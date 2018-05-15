import React, {
    Component
} from 'react';
import './choose.css';

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
        console.log(e.target.id);
        window.location.href = 'http://localhost:3000/course';
    }

    render() {
        const number = this.props.number;
        const list = [];
        for (let i = 0; i < number; i++) {
            list.push(<div className="course" key={i} id={i} onClick={this.handleClick}>{i + 1}</div>)
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

    }

    backClick() {
        window.location.href = 'http://localhost:3000/index';
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
    render() {
        return (<div id="choose">
                    <CourseContainer />
                    <Buttons />
                </div>)
    }
}

export default Choose;