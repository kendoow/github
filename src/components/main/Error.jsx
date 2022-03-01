import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div style = {{textAlign: 'center', display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <button onClick={() => navigate("../", { replace: false })}>GO TO MAIN PAGE</button>
        ERROR
    </div>
  )
}

export default Error;