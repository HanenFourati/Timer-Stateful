import React from 'react';
import './TimerDyn.css';

let m=0,
 h=0,
s=0;
function tohms(timeinmill){
  h= Math.floor(timeinmill / (1000 * 60 * 60) % 60);
      m= Math.floor(timeinmill / (1000 * 60) % 60);
    s= Math.floor(timeinmill / 1000 % 60);
   return String(h).padStart(2, 0)+"   :   "+ String(m).padStart(2, 0)+"   :   "+ String(s).padStart(2, 0)
}

const TimerDyn = ({time}) => {
  
    return (
      
        <div className="divstyle">
         <div className="divstyle1"> <p>
           {tohms(time)}
          </p></div>
          <div className="divstyle2">
          <p>
          Hour
          </p>
          
          <p>
          Minute
          </p>
         
          <p>
         Second
          </p>
          </div>
         

      </div>
    );
 
}

export default TimerDyn;
