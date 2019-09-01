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
                    <a
                        className="App-link"
                        href="#"
                        rel="noopener noreferrer"
                        onClick={() => this.LoadingBar.staticStart()}
                    >
                        Click here to reproduce bug with color
                    </a>
                <h1>Not working color</h1>
                <div style={{height:"10px"}}>
                    <div style={{backgroundColor: "#ff9b20", background: "", width: "40%", height: "10px"}}></div>
                </div>
                <h1>Working</h1>
                <div style={{height:"10px"}}>
                    <div style={{backgroundColor: "#ff9b20", width: "40%", height: "10px"}}></div>
                </div>
            </div>
        );
    }
}

export default App;
