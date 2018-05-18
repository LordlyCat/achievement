class Animation {
    static quitPage() {
        document.querySelector('#root').className = 'rootQuit';
    }

    static enterPage() {
        setTimeout(() => {
            document.querySelector('#root').className = 'roots';
        }, 300);
    }
}

export default Animation;