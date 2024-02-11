import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Caught.css";

const Caught = () => {
  const navigate = useNavigate();
  const onClick = () => {  navigate("/")}
  return (
    <div className = "crime">
      <div className = "caut">Caught</div>
    <div>
      <button onClick={onClick} type="button" class="btn btn-success">Restart</button>
    </div>
    </div>
  )
}

export default Caught