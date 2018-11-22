import React from 'react';
import TimerDyn from './TimerDyn.js'
import './TimerDyn.css'
class TimerS extends React.Component {
  intervalID = 0;
  constructor(props) {
  
    super(props)
   
    this.state = {
      Time: 0, clicked: false,
        }
        
   
  }


handleClickstart(e) {
  if (this.state.clicked===false){
  this.intervalID = setInterval(
        () => {
          // this.state.timer ++ 
          this.setState({
            Time: this.state.Time + 1000,  
           

          })
        },
        1000
      )
     
    }

       }


       handleClickpause(e) {
        clearInterval(this.intervalID);
        this.setState({
            
          clicked: false,

        })
                }  
                
       handleClickreset(e) {
        clearInterval(this.intervalID);
        this.setState({
          Time: 0,  
          

        })
     
                }          
  render() {
    return (
        <div className="divstyle1">
         <p>
        <TimerDyn time={this.state.Time}/> 
          </p>
        
      <div className="divstyle3">
            <input className="glossy" type="submit" value="Start"  onClick={this.handleClickstart.bind(this) }/>
            <input  className="glossy" type="submit" value="Pause" onClick={this.handleClickpause.bind(this) }/>
            <input  className="glossy" type="submit" value="Reset" onClick={this.handleClickreset.bind(this) }/>
      </div>
      </div>
   
    );
  }
}

export default TimerS;
