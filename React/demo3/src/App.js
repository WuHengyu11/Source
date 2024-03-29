import React, { Component } from 'react';
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
    {
        title : "Redux",
        url : 'https://facebook.github.io/react/',
        author : "wuhy",
        num_comments: 4,
        points : 5,
        objectID : 1,
    },
];
// function isSearched(searchTerm) {
//     return function (item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
    constructor() {
        super();
        this.state = {
            list,
            searchTerm: '',
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss(id){
        const isNotId = item => item.objectID !== id;
        const updateList = this.state.list.filter(isNotId);
        this.setState({list: updateList});
    }
    onSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }
    render() {
        const {searchTerm,list} = this.state;
        return (
            <div className="App">
                <Search value={searchTerm} onChange={this.onSearchChange()}/>
                <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
            </div>
        )
    }
}

//search组件
class Search extends Component{
    render() {
        const {value,onChange} = this.props;
        return (
            <form>
                <input type="text" value={value} onChange={onChange}/>
            </form>
        )
    }
}
//table组件
class Table extends Component{
    render() {
        const {list,pattern,onDismiss} = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button onClick={() => onDismiss(item.objectID)} type="button">
                                Dismiss
                            </button>
                        </span>
                    </div>
                )};
            </div>
        );
    }
}
export default App;
