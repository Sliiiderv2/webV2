import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from 'react-md/lib/Buttons/Button';

import '../styles/App.sass';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2 className="App-title"> custom-react-scripts </h2>
                    <div className="App-subtitle">
                        your name –
                        {' '}
                        {this.props.name}
                    </div>
                </div>
                <div className="btn-example">
                    <h5>Theme Examples</h5>
                    <Link to="/"><Button raised label="Home!" /></Link>
                    <Link to="/route1">
                        <Button raised primary label="Route1" />
                    </Link>
                    <Link to="/route2">
                        <Button raised secondary label="Route2" />
                    </Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.page.name,
    };
}

export default connect(mapStateToProps)(App);
