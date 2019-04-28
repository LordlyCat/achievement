import React, {
    Component
} from 'react';
import Choose from '../choose/Choose.js';

class NewX extends Component {
    constructor() {
        super()
        this.rootRef = React.createRef();
    }

    componentDidMount() {
        // const rootNode = this.rootRef.current;
        // const ul = root.querySelector('ul');
        // let newNode_1 = document.createElement('div');
        // let newNode_2 = document.createElement('div');

        // newNode_1.setAttribute('class', 'course unfinished');
        // newNode_2.setAttribute('class', 'course unfinished');

        // ul.appendChild(newNode_1);
        // ul.appendChild
    }

    render() {
        return <Choose ref={this.rootRef} />
    }
}

export default NewX;