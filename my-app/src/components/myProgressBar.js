import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


// import Button from 'react-bootstrap/Button';


 
class MyProgressBar extends Component {
  render() {
    return (
      <div className='skillsList'>  
            
            
      <div className='allProgressBars'>
         <ProgressBar animated now={45} />
         <br/>
         <ProgressBar animated now={70} />
         <br/>
         <ProgressBar animated now={60} />
         <br/>
         <ProgressBar animated now={60} />
         <br/>
         <ProgressBar animated now={70} />
         <br/>
         <ProgressBar animated now={60} />
  
      </div>
      </div>
    );
  }
}
 
export default MyProgressBar;