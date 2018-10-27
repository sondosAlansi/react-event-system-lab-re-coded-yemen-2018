// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
  enter = () => {
      console.log('Entering password...');
    }
render(){


  return(

    <input type="password" onkeyUp={this.enter} />
  )
}
  
}
