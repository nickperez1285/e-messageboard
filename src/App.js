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
       <center>
        Nicks Public Key to receive messages  
       <p style={{width: '50%' , border:'solid'}}>
       <p>-----BEGIN PGP PUBLIC KEY BLOCK----- </p>
<div>
xjMEZmcdHBYJKwYBBAHaRw8BAQdAX8LX+HmXGWc5xJDU8j9hUS6ZYN09Gx67
HcPa6JyxZ5vNJ3Zsbm14aGw4ampkbXZwZ3Fhd2ZnaHEgPG5pY2tAbmlnaHQu
Y29tPsKMBBAWCgAdBQJmZx0cBAsJBwgDFQgKBBYAAgECGQECGwMCHgEAIQkQ
mJV4WOqUS68WIQSrSIofDg65JVzXGIOYlXhY6pRLrxkCAP4mJJ9yPSAzPAhY
HyY5fFurjpLuq/pie1ywKw2h+8GbmAEAxRtu4ilfJBQhUTjtclSxKcDGIVCi
oNuwFMJtttdUhgTOOARmZx0cEgorBgEEAZdVAQUBAQdApNhqmfR/TnJep7ZT
guISf1L/2Qji0oYGzEO9OLdoDFMDAQgHwngEGBYIAAkFAmZnHRwCGwwAIQkQ
mJV4WOqUS68WIQSrSIofDg65JVzXGIOYlXhY6pRLr9jMAQCYyEf8oT2VA8NB
80a1riEynjqN+RuLFYi+DgcBZzU3CAEA6c4ZKXbAUnNggpc9I/D9uqAHdU3t
F92Pa14LbLfJUwQ==bT2/
</div>
<div>
-----END PGP PUBLIC KEY BLOCK-----
</div>

</p>
</center>
        <ThreadDisplay database={this.database} />
      </div>
    );
  }
}

export default App;
