import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    result : 'ผลลัพธ์' ,
    cardAt : 'ตำแหน่ง'
  }
  
  render() {
    const cardAt = (e) => {
      if (e.target.value === '' || e.target.value > 51 || e.target.value < 0) {
        this.setState({
          result : 'ผลลัพธ์' ,
          cardAt : 'ตำแหน่ง' 
        })
      }
      else{
        const Bamboo_shoot = ["C" , "D" , "H" , "S"]
        const Bamboo_number = ["2" , "3"  , "4" , "5" , "6" , "7" , "8" , "9" , "0" , "J" , "Q" , "K" , "A"]
        this.setState({
          result : (Bamboo_number[(e.target.value % 13)] + Bamboo_shoot[Math.floor(e.target.value / Bamboo_number.length)]) ,
          cardAt : e.target.value
        })
      }
    }

    return (
      <div className="App">
        <header className="App-header">
        <p>
          cardAt ( {this.state.cardAt} ) = {this.state.result}
        </p><br/>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" placeholder="ค้นหาไผ่ที่คุณต้องการ" onChange={cardAt} onKeyUp={cardAt}/>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;