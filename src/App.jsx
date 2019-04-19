import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bulb from './Components/Bulb.jsx'
import BulbOff from './Components/BulbOff.jsx'
import BulbOn from './Components/BulbOn.jsx'
import BulbBroken from './Components/BulbBroken.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      bulb: ''
    }
    this.Func = this.Func.bind(this)
  }

  Func(e) {
    // console.log(e)
    this.setState({ bulb: e })
    this.setState({ toggle: false })
    // console.log(this.state.bulb)
  }

  render() {
    const { bulb, toggle } = this.state
    return (
      <div className="App">


        {console.log(this.state.bulb)}
        {toggle && <Bulb width='300px' height='400px' />}
        {bulb === 'on' && <BulbOn width='300px' height='400px' />}
        {bulb === 'off' && <BulbOff width='300px' height='400px' />}
        {bulb === 'break' && <BulbBroken width='260px' height='400px' />}
<br/>
        <button onClick={() => this.Func('on')}>ON</button>
        <button onClick={() => this.Func('off')}>OFF</button>
        <button onClick={() => this.Func('break')}>Break</button>



      </div>
    );
  }
}


export default App;
