import React from "react"

function Movie({ id, children, ...rest }){
    return (
        <>
            <h1>무비 정보</h1>
            <p {...rest}></p> 
            <>{children}</>
        </>
    )
}


export default Movie