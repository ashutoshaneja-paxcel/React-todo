import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  // Using constructor to save state
  constructor(props){
    super();
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem = {
        id: Date.now(),
        value: todoValue
      };
    
      const list = [...this.state.list];  //... appends all existing values
      list.push(newItem);
      
      this.setState({
        list, 
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }

  updateInput(input){
    this.setState({newItem: input});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 className="App-title">React Todo</h1>
        <div className="container">
          Add an item...
            <br />
          <input type="text" 
          className="input-text" 
          placeholder="Write todo here" 
          required
          value = {this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          ></input>
          <button type="submit" className="add-btn" 
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add todo</button>
          <div className="list">
            <ul>
              {
                this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      <span role="img" aria-label="hand" className="emoji">&#x1F449;&#x1F3FB;</span>  {item.value}
                      <button className="delete-btn" 
                      onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;