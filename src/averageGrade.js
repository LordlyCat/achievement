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

    //let average = total / 5;
    let userGrade = null;
    let classGrade = null;

    if (userFinished > total * 0.91) {
        userGrade = 'A+';
    } else if (userFinished > total * 0.81) {
        userGrade = 'A';
    } else if (userFinished > total * 0.71) {
        userGrade = 'A-';
    } else if (userFinished > total * 0.61) {
        userGrade = 'B+';
    } else if (userFinished > total * 0.51) {
        userGrade = 'B';
    } else if (userFinished > total * 0.41) {
        userGrade = 'B-';
    } else if (userFinished > total * 0.31) {
        userGrade = 'C+';
    } else if (userFinished > total * 0.21) {
        userGrade = 'C';
    } else {
        userGrade = 'C-';
    }

    if (classFinished > total * 0.91) {
        classGrade = 'A+';
    } else if (classFinished > total * 0.81) {
        classGrade = 'A';
    } else if (classFinished > total * 0.71) {
        classGrade = 'A-';
    } else if (classFinished > total * 0.61) {
        classGrade = 'B+';
    } else if (classFinished > total * 0.51) {
        classGrade = 'B';
    } else if (classFinished > total * 0.41) {
        classGrade = 'B-';
    } else if (classFinished > total * 0.31) {
        classGrade = 'C+';
    } else if (classFinished > total * 0.21) {
        classGrade = 'C';
    } else {
        classGrade = 'C-';
    }

    return {
        userGrade: userGrade,
        classGrade: classGrade
    }
}

export default averageGrade;