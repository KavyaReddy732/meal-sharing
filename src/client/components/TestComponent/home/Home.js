import React from "react";
import { useHistory } from "react-router-dom";
import navimg from "../../../assets/images/navimg.png";
import "./home.css";

export function Home(){
    let history = useHistory();

  const redirect = () => {
    history.push('/meals')
  }
    return(
        <div className="bg">
            <h1>NOTHING BRINGS PEOPLE TOGETHER LIKE GOOD FOOD</h1>
            <button className="button" onClick={redirect}>CLICK HERE</button>
            <p>To to find the best meals and for reservations</p>
        </div>
    )
}