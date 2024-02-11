import React from 'react'
import { useNavigate } from "react-router-dom";
import "./RanAway.css";

const RanAway = () => {
  const navigate = useNavigate();
  const onClick = () => {  navigate("/")}
  return (
    <div className = "nocrime">
    <div className = "rann">Ran Away</div>
    <div>
      <button onClick={onClick} type="button" class="btn btn-success">Restart</button>
    </div>
    </div>
  )
}

export default RanAway
