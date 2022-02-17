import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  state={
    progress:0
  }
  api=process.env.REACT_APP_NEWS_API;
  updateProgress=(prog)=>{
    this.setState({progress:prog})
  }
  pageSize=5;
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
          progress={this.state.progress}
          height={3}
          color="red"
          // onLoaderFinished={() => this.onLoaderFinished()}
        />
          <Navbar />

          <Switch>
            <Route exact path="/"><News progress={this.updateProgress} key="general" api={this.api} pageSize={this.pageSize} country="in" category="general"/></Route>
            <Route exact path="/business"><News progress={this.updateProgress} key="business" api={this.api} pageSize={this.pageSize} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News progress={this.updateProgress} api={this.api} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
            <Route exact path="/health"><News progress={this.updateProgress} api={this.api} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
            <Route exact path="/science"><News progress={this.updateProgress} api={this.api} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
            <Route exact path="/sports"><News progress={this.updateProgress} api={this.api} key="sports" pageSize={this.pageSize} country="us" category="sports"/></Route>
            <Route exact path="/technology"><News progress={this.updateProgress} api={this.api} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
