import React from "react";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './mealcss/cardrender.css';
export function DisplayMeals({id, title,description,location}){
  let history = useHistory();

  const redirect = () => {
    history.push('/review/'+id)
  }
     return(
       <div className ="grid-container">
        <NavLink to= {`/meals/${id}`}>
          <h4> {title}</h4>
          <p>{description}</p>
          <p>{location}</p>
        </NavLink>
        <button className="button" onClick={redirect}>Add Review</button>
        </div>
     ) 
}