import React, { Component } from 'react';
import {get} from 'axios';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  componentDidMount() {
    get('/resumeData.json')
        .then((res) => {
            console.log(res);
          this.setState({
            resumeData: res.data
          })
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        })
  }

    render() {
        const { resumeData } = this.state;
        const {main, resume, portfolio} = this.state.resumeData;
        if (!_.isEmpty(resumeData)) {
            return (
                <div className="App">
                    <Header data={main}/>
                    <About data={main}/>
                    <Resume data={resume}/>
                    <Portfolio data={portfolio} />
                </div>
            )
        }
        return null;
    }
}

export default App;
