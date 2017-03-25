import React, {Component} from 'react';
import Button from 'react-md/lib/Buttons/Button';

//styles
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title"> ☢ custom-react-scripts ☢ </h2>
          <div className="App-subtitle"> allow custom config for create-react-app without ejecting</div>
        </div>
        <div className="btn-example">
          <h5>Theme Examples</h5>
          <Button raised label="Hello, World!" />
          <Button raised primary label="Spock" iconClassName="fa fa-hand-spock-o" />
          <Button raised secondary iconBefore={false} label="Paper" iconClassName="fa fa-hand-paper-o" />
          <h5>Disabled Examples</h5>
          <Button raised disabled label="Disabled Button" />
          <Button raised disabled label="Disabled Button">close</Button>
        </div>
      </div>
    )
  }
}

export default App;
