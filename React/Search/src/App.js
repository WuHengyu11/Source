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
      return(
          <div className="App">
              <form>
                  <input type="text" onChange={this.onSearchChange}/>
              </form>
              {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>{
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
