import React from 'react';

class Counter extends React.Component{

render(){
  const {counter, increment, decrement, reset} = this.props;

  return(
    <div>
        <h1>(counter)</h1>
        <button onClick={increment}>increment</button>
        <button onClick={increment}>increment</button>
        <button onClick={increment}>increment</button>
    </div>
  )
}

}

export default Counter