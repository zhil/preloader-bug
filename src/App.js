import React from 'react';
import LoadingBar from 'react-top-loading-bar'


import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                {/*<LoadingBar*/}
                {/*    height={10}*/}
                {/*    background="background-color: #ff9b20"*/}
                {/*    onRef={ref => (this.LoadingBar = ref)}*/}
                {/*/>*/}
                <LoadingBar
                    height={10}
                    color="#ff9b20"
                    onRef={ref => (this.LoadingBar = ref)}
                />

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <a
                        className="App-link"
                        href="#"
                        rel="noopener noreferrer"
                        onClick={() => this.LoadingBar.staticStart()}
                    >
                        Click here to reproduce bug with color
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
