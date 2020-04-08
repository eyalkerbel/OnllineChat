








import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import axios from 'axios';
import logo from './logo.svg';
 
class App extends Component {
  componentDidMount() {
    addResponseMessage("hello you user!!!");
  }
 
  handleNewUserMessage = (newMessage) => {
    axios.request({
            method: 'POST',
            url: '/GetAnswer',
            data: {
              message: newMessage
            }
          }).then(res => { 
            console.log(res);
            addResponseMessage(res.data.serverMessage);
          }).catch((err)=>    console.log("unsucessfull",err));
  }
 
  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Chat Online"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}
 
export default App;



















