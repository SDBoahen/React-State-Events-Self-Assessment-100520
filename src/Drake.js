import React from 'react';
import './App.css';

import { yes, no } from './objects'
// import objects from './objects'

class Drake extends React.Component { 
    

  state={ clicked: false, at:no,
          con1:yes,
          con2:no
  }
  clickHandler =()=>{ 
    return( this.setState( 
        (prevState) => ({ at: !prevState.at, clicked: !prevState.clicked }), 
        // (prevState) => ({ clicked: !prevState.clicked })
        
    ))
    //this.setState({ at: yes}) )
  }
  //console.log("Drizziii!") }

  whatGoodDrizzi =()=>{

    if(this.state.clicked === true){ return(
      <h1>{this.state.con1["yes-statement"]}</h1>,
      <img alt='joyful Drake' src={this.state.con1["yes-image"]}
      onClick={ this.clickHandler } />
    )}
    if(this.state.clicked === false){ return( <>
        <h1>{this.state.con2["no-statement"]}</h1>
        <img alt='nah Drake' src={this.state.con2["no-image"]}
        onClick={ this.clickHandler } />
    </> ) }

  }
  //console.log('champainepapi!') }


  render(){ 

    console.log(this.state.con1)
    console.log(this.state.con2)

    console.log('{@}: ', this.state.at)
    

    return(
    <>
        {this.whatGoodDrizzi()}
    </>)
    //<h1>It's a 9 now ~</h1>)

  }


}
export default Drake