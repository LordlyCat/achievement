import React, {
    Component
} from 'react';
import './course.css';
import Animation from '../animation.js';
import ajax from '../Ajax.js';
import MD5 from './md5.js';

import sjdTitle from '../img/sjdTitle.png';
import sgqmTitle from '../img/sgqmTitle.png';
import zgmTitle from '../img/zgmTitle.png';
import qngzTitle from '../img/qngzTitle.png';
import gsdgTitle from '../img/gsdgTitle.png';

class Topic extends Component {
    constructor() {
        super();
        this.state = {
            img: [qngzTitle, sjdTitle, zgmTitle, gsdgTitle, sgqmTitle],
            index: localStorage.getItem('plate')
        }

    }
    render() {
        return (<div className="topic">
                    <img src={this.state.img[this.state.index - 1]} alt=""/>
                </div>);
    }
}

class Order extends Component {

    render() {
        return (<div className="order">第<span>{localStorage.getItem('course')}</span>课</div>)
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
        // ajax({
        //     async: false,
        //     url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/index/getCourseContent',
        //     method: 'POST',
        //     data: {
        //         part: 2,
        //         course: 2
        //     },
        //     success: (data) => {
        //         console.log(data);
        //         this.state = {
        //             title: data.data[0]["title"],
        //             content: data.data[0]["title"]
        //         }
        //     }
        // })
        let data = JSON.parse(localStorage.getItem('courseContent'));
        // this.state = {
        //     title: data.data[0]["title"],
        //     content: data.data[0]["content"]
        // }
    }

    render() {
        return (<div className="contentWrapper">
                    <div className="content">
                        <div className="title">{this.props.title}</div>
                        <p className="mainContent">{this.props.content[0]}</p>
                        <p className="mainContent">{this.props.content[1]}</p>
                        <p className="mainContent">{this.props.content[2]}</p>
                    </div>
            </div>);
    }
}

class NextBtn extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.sendFinished = this.sendFinished.bind(this);
        this.state = {
            inner: '5s',
            disabled: true
        }
    }

    componentDidMount() {
        this.cutdown();
    }
    // shouldComponentUpdate() {
    //     this.setState({
    //         inner: '下一个',
    //         disabled: false
    //     });
    //     this.cutdown();
    // }

    handleClick(e) {
        if (!this.state.disabled && !this.props.finished && this.props.length !== 1) {
            clearTimeout(this.timer);
            this.props.getNewContent();
            this.setState({
                inner: '5s',
                disabled: true
            });
            this.cutdown();
        } else if ((!this.state.disabled && this.props.finished) || this.props.length === 1) {
            this.setState({
                disabled: false
            });

            let m = localStorage.getItem('count') - 1;
            m = MD5(m.toString(), 32);
            let s = parseInt(localStorage.getItem('count')) + 1;
            s = MD5(s.toString(), 32);
            let r = localStorage.getItem('count');

            let openid = JSON.parse(localStorage.getItem('userInformation')).data.openid;
            let part = localStorage.getItem('plate');
            let course = localStorage.getItem('course');

            if (localStorage.getItem('courseClassName') === 'course unfinished') {
                this.sendFinished(`openid=${openid}&part=${part}&course=${course}&s=${s}&m=${m}&r=${r}`);
            }

            if (this.state.inner === '继续学习') {
                window.location.href = 'choose';
            } else {
                this.props.show();
            }
            this.setState({
                inner: '继续学习'
            })
        }
    }

    //  提交验证
    sendFinished(data) {
        ajax({
            async: true,
            method: 'POST',
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/User/completeClass',
            data: data,
            header: 'application/x-www-form-urlencoded',
            success: (data) => {
                console.log(JSON.parse(data));
                alert(data);
                if (JSON.parse(data).status != 200) {
                    alert("提交失败！");
                }
            }
        })
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

class Congratuulation extends Component {
    constructor() {
        super();
        let courseNumber = localStorage.getItem('maxCourse');
        let course = localStorage.getItem('course');
        if (course !== courseNumber) {
            this.state = {
                className: 'courseFinished'
            }
        } else {
            this.state = {
                className: 'plateFinished'
            }
        }
    }
    render() {
        return (<div className={this.props.className}>
                    <div className="shutdown" onClick={this.props.shutdown}></div>
                    <div className={this.state.className}>
                        
                    </div>
                </div>)
    }
}


class Course extends Component {
    constructor(props) {
        super(props);

        this.shutdown = this.shutdown.bind(this);
        this.showPopUps = this.showPopUps.bind(this);


        let plate = parseInt(localStorage.getItem('plate'));
        let course = parseInt(localStorage.getItem('course'))
        ajax({
            async: false,
            method: 'POST',
            url: 'https://wx.idsbllp.cn/game/youth_report/index.php/Home/index/getCourseContent',
            data: `part=${plate}&course=${course}`,
            header: 'application/x-www-form-urlencoded',
            success: function(data) {
                localStorage.setItem('courseContent', data);
            }
        })
        let contentObj = JSON.parse(localStorage.getItem('courseContent')).data;
        if (plate === 4) {
            this.state = {
                length: contentObj.length,
                className: 'unPopCover',
                index: 0,
                finished: false,
                title: contentObj[0]["title"],
                content: [contentObj[0]["content1"], contentObj[0]["content2"], contentObj[0]["content3"]]
            }
        } else {
            this.state = {
                length: contentObj.length,
                className: 'unPopCover',
                index: 0,
                finished: false,
                title: contentObj[0]["title"],
                content: [contentObj[0]["content"]]
            }
        }
        this.second = 0;
        this.getNewContent = this.getNewContent.bind(this);
        this.count = this.count.bind(this);
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

    getNewContent() {
        let data = JSON.parse(localStorage.getItem('courseContent'));
        let plate = parseInt(localStorage.getItem('plate'));

        //故事典故板块特殊处理
        if (plate === 4) {
            if (this.state.index < 2 && this.state.length === 3) {
                if (this.state.index === 1) {
                    this.setState({
                        finished: true
                    })
                }
                this.setState({
                    index: this.state.index + 1,
                    title: data.data[this.state.index + 1]["title"],
                    content: [data.data[this.state.index + 1]["content1"],
                        data.data[this.state.index + 1]["content2"],
                        data.data[this.state.index + 1]["content3"]
                    ]
                })
            }
            if (this.state.length === 1) {
                this.setState({
                    finished: true
                })
            }
            if (this.state.index < 1 && this.state.length === 2) {
                if (this.state.index === 0) {
                    this.setState({
                        finished: true
                    })
                }
                this.setState({
                    index: this.state.index + 1,
                    title: data.data[this.state.index + 1]["title"],
                    content: [data.data[this.state.index + 1]["content1"],
                        data.data[this.state.index + 1]["content2"],
                        data.data[this.state.index + 1]["content3"]
                    ]
                })
            }
        } else {
            if (this.state.index < 2 && this.state.length === 3) {
                if (this.state.index === 1) {
                    this.setState({
                        finished: true
                    })
                }
                this.setState({
                    index: this.state.index + 1,
                    title: data.data[this.state.index + 1]["title"],
                    content: [data.data[this.state.index + 1]["content"]]
                })
            }
            if (this.state.length === 1) {
                this.setState({
                    finished: true
                })
            }
            if (this.state.index < 1 && this.state.length === 2) {
                if (this.state.index === 0) {
                    this.setState({
                        finished: true
                    })
                }
                this.setState({
                    index: this.state.index + 1,
                    title: data.data[this.state.index + 1]["title"],
                    content: [data.data[this.state.index + 1]["content"]]
                })
            }
        }



    }

    count() {
        this.timer = setInterval(() => {
            this.second++;
            localStorage.setItem('count', this.second);
        }, 1000)
    }

    componentDidMount() {
        // let contentObj = JSON.parse(localStorage.getItem('courseContent')).data;
        // let plate = parseInt(localStorage.getItem('plate'));
        // this.setState({
        //     index: 0,
        //     finished: false,
        //     title: data[0]["title"],
        //     content: data[0]["content"]
        // });

        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
        this.count();
    }

    componentDidUpdate() {
        // localStorage.setItem('count', this.second);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (<div id="course">
                    <Topic />
                    <Order />
                    <Content 
                    title={this.state.title}
                    content={this.state.content}/>
                    <NextBtn 
                    getNewContent={this.getNewContent}
                    finished={this.state.finished}
                    show={this.showPopUps}
                    length={this.state.length}/>
                    <Congratuulation 
                    className={this.state.className}
                    shutdown={this.shutdown}/>
                </div>)
    }
}

export default Course;