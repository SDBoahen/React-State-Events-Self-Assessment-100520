import React from 'react';
import './App.css';

import { yes, no } from './objects'
// import objects from './objects'

class Drake extends React.Component { 
    

  state={ clicked: false,
          con1:yes,
          con2:no
  }


  render(){ 

    console.log(this.state.con1)
    console.log(this.state.con2)

    return( 
    <h1>{this.state.con1["yes-statement"]}</h1>,
    <img src={this.state.con1["yes-image"]}/>

    //<h1>{this.state.con2["no-statement"]}</h1>
    )
    //<h1>It's a 9 now ~</h1>)

  }


}
export default Drake