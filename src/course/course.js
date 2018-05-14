import React, {
    Component
} from 'react';
import './course.css';

class Topic extends Component {
    render() {
        return (<div className="topic"></div>);
    }
}

class Order extends Component {
    render() {
        return (<div className="order"></div>)
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            title: '',
            content: ''
        }
    }

    render() {
        return (<div className="contentWrapper">
                    <div className="content">
                        <div className="title">这是测试文字</div>
                         <p className="mainContent">这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是
                    这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文
                    这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试测试文字
                    字这是测试文字这是测试文字这是测试测试文字
                    字这是测试文字这是测试文字这是测试测试文字字这是测试文字这是测试文字这是测试测试文字
                    字这是测试文字这是测试文字这是测试测试文字字这是测试文字这是测试文字这是测试测试文字字这是测试文字这是测试

                    字这是测试文字这是测试文字这是测试测试文字字这是测试文字这是测试文字这是测试测试文字字这是测试文字这是测试
                    字这是测试文字这是测试文字这是测试测试文字
                    这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文试文字
                    这是测试文字这是测试文字这是测试文字</p>
                    </div>
            </div>);
    }
}

class NextBtn extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            inner: '5s',
            disabled: true
        }
    }

    componentDidMount() {
        this.cutdown();
    }

    handleClick(e) {
        if (!this.state.disabled) {
            console.log(e);
            clearTimeout(this.timer);
            //console.log(a);
        }
    }

    cutdown() {
        let t = 5;
        let inner;
        this.timer = setInterval(() => {
            if (t > 0) {
                inner = t + 's';
                this.setState({
                    inner: inner
                });
                t--;
            } else {
                this.setState({
                    inner: '下一个',
                    disabled: false
                });
                clearTimeout(this.timer);
            }
        }, 1000)
    }

    render() {
        return (<div className="next" onClick={this.handleClick}>{this.state.inner}</div>)
    }
}


class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            title: '',
            content: ''
        }
    }
    render() {
        return (<div id="course">
                    <Topic />
                    <Order />
                    <Content />
                    <NextBtn />
                </div>)
    }
}

export default Course;