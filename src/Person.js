import React, {Component} from 'react'   // 컴포넌트 생성을 위한 객체와 메서드 임포트

class Person extends Component {
    render(){   // HTML 템플릿(UI)과 데이터를 이용해서 화면에 페이지를 그려주는 메서드, 데이터
        const name = 'syleemomo'
        const age = 3
        
        // React.Fragment : div 요소처럼 여러개의 엘리먼트를 하나로 묶어주는 컴포넌트
        // 화면에 보이지는 않는다. 반드시 랜더링할 엘리먼트가 여러개이면 div요소나 Fragment 컴포넌트로 묶어줘야 한다.

        return (
            <React.Fragment>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </React.Fragment>
        )
    }
}
export default Person;