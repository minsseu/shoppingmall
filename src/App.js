import React, { Component } from 'react'

function App(){
  // 컴포넌트
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i)); // props.children : Repeat 컴포넌트의 자식요소로 전달된 콜백함수
    }
    return <div>{items}</div>;
  }

  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  )

}

export default App;