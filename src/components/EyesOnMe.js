// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
  fo = () => {
      console.log('Good!');
    }
    bl = () => {
        console.log('Hey! Eyes on me!');
      }
render(){


  return(

    <button onfocus={this.fo}  onblur={this.bl}>click</button>
  )
}

}

