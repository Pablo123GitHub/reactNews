import React, {Component} from 'react';
import News from '../Components/News';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            news: "news"
        }
    }

    render(){
        return (
            <News/>
        )
    }
}

export default App;