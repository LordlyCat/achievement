let averageGrade = () => {
    let courseNumber = JSON.parse(localStorage.getItem('courseNumber')).data;
    let user = JSON.parse(localStorage.getItem('userInformation')).data['user_condition'];
    let classF = JSON.parse(localStorage.getItem('userInformation')).data['user_condition'];

    let total = courseNumber['classic_stories'] +
        courseNumber['youth_work'] +
        courseNumber['four_comprehensives'] +
        courseNumber['china_dream'] +
        courseNumber['report_19th'];

    let userFinished = parseInt(user['classic_stories'], 10) +
        parseInt(user['youth_work'], 10) +
        parseInt(user['four_comprehensives'], 10) +
        parseInt(user['china_dream'], 10) +
        parseInt(user['report_19th'], 10);

    let classFinished = parseInt(classF['classic_stories'], 10) +
        parseInt(classF['youth_work'], 10) +
        parseInt(classF['four_comprehensives'], 10) +
        parseInt(classF['china_dream'], 10) +
        parseInt(classF['report_19th'], 10);

    let average = total / 5;
    let userGrade = null;
    let classGrade = null;

    if (userFinished === total) {
        userGrade = 'A+';
    } else if (userFinished > average * 4) {
        userGrade = 'A';
    } else if (userFinished > average * 3) {
        userGrade = 'B+';
    } else if (userFinished > average * 2) {
        userGrade = 'B';
    } else if (userFinished > average * 1) {
        userGrade = 'C+';
    } else {
        userGrade = 'C';
    }

    if (classFinished === total) {
        classGrade = 'A+';
    } else if (classFinished > average * 4) {
        classGrade = 'A';
    } else if (classFinished > average * 3) {
        classGrade = 'B+';
    } else if (classFinished > average * 2) {
        classGrade = 'B';
    } else if (classFinished > average * 1) {
        classGrade = 'C+';
    } else {
        classGrade = 'C';
    }

    return {
        userGrade: userGrade,
        classGrade: classGrade
    }
}

export default averageGrade;

// averageGrade();

// class AverageGrade {
//     constructor() {
//         let courseNumber = JSON.parse(localStorage.getItem('courseNumber')).data;
//         let user = JSON.parse(localStorage.getItem('userInformation')).data['user_condition'];
//         let classF = JSON.parse(localStorage.getItem('userInformation')).data['user_condition'];

//         this.total = courseNumber['classic_stories'] +
//             courseNumber['youth_work'] +
//             courseNumber['four_comprehensives'] +
//             courseNumber['china_dream'] +
//             courseNumber['report_19th'];
//         console.log(this.total);

//         this.userFinished = parseInt(user['classic_stories']) +
//             parseInt(user['youth_work']) +
//             parseInt(user['four_comprehensives']) +
//             parseInt(user['china_dream']) +
//             parseInt(user['report_19th']);

//         this.classFinished = parseInt(classF['classic_stories']) +
//             parseInt(classF['youth_work']) +
//             parseInt(classF['four_comprehensives']) +
//             parseInt(classF['china_dream']) +
//             parseInt(classF['report_19th']);

//         this.average = this.total / 5;
//         // this.calculate = this.calculate.bind(this);
//         // this.getAverageGrade = this.getAverageGrade.bind(this);
//     }

//     calculate(d) {
//         let grade = null
//         console.log(d);
//         console.log(this.total);
//         if (d === this.total) {
//             grade = 'A+';
//         } else if (d > this.average * 4) {
//             grade = 'A';
//         } else if (d > this.average * 3) {
//             grade = 'B+';
//         } else if (d > this.average * 2) {
//             grade = 'B';
//         } else if (d > this.average * 1) {
//             grade = 'C+';
//         } else {
//             grade = 'C';
//         }
//         return grade;
//     }

//     static getAverageGrade() {
//         console.log(this.total);
//         // let calculate = (d) => {
//         //     let grade = null
//         //     console.log(this.total);
//         //     if (d === this.total) {
//         //         grade = 'A+';
//         //     } else if (d > this.average * 4) {
//         //         grade = 'A';
//         //     } else if (d > this.average * 3) {
//         //         grade = 'B+';
//         //     } else if (d > this.average * 2) {
//         //         grade = 'B';
//         //     } else if (d > this.average * 1) {
//         //         grade = 'C+';
//         //     } else {
//         //         grade = 'C';
//         //     }
//         //     return grade;
//         // }
//         // return {
//         //     userGrade: calculate(this.userFinished),
//         //     classGrade: calculate(this.classFinished)
//         // }
//     }
// }


//export default AverageGrade;