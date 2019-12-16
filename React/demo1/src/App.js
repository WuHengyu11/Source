import React, {Component} from 'react';
import './App.css';

const list = [
    {
        title : "React",
        url : 'https://facebook.github.io/react/',
        author : "wuhy",
        num_comments: 3,
        points : 4,
        objectID : 0,
    },

];

class  App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: list,
        };
        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss(id){
       const isNotId = item => item.objectID !== id;
       const updateList = this.state.list.filter(isNotId);
       this.setState({list: updateList});
    }
    render() {
        return (
            <div className="App">
                {this.state.list.map(item => {
                        const onHandleDismiss = () =>
                            this.onDismiss(item.objectID);
                        return (
                            <div key={item.objectID}>
                                <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
                                <span>{item.author}</span>
                                <span>{item.num_comments}</span>
                                <span>{item.points}</span>
                                <span>
                                    <button onClick={onHandleDismiss} type="button">
                                        Dismiss
                                    </button>
                                </span>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }
}

export default App;

