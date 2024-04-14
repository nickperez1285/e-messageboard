import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config =
    {

        apiKey: "AIzaSyB697wr5ZU9N42f6EMUcnfQYbmhI9YQ3gE",
      
        authDomain: "message-board-7bfdf.firebaseapp.com",
      
        projectId: "message-board-7bfdf",
      
        storageBucket: "message-board-7bfdf.appspot.com",
      
        messagingSenderId: "979637821311",
      
        appId: "1:979637821311:web:be992873428cd8849cc44a", 

        databaseURL: "https://message-board-7bfdf-default-rtdb.firebaseio.com/"
      
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <div>
       <center><h1>Simple Message Board</h1>
       <h3>This is a simple message board that only saves 
        posts and nothing else . Its completely <u>annonymous</u> </h3>
       </center>
        <ThreadDisplay database={this.database} />
      </div>
    );
  }
}

export default App;
