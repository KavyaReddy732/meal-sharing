import React, {useState,useEffect} from "react";
import {DisplayMeals} from "./DisplayMeals";

export  function FetchMeals() {
  const[meals, setMeals] = useState([])
   useEffect (() => {
      (async() => { 
        const response = await fetch('/api/meals')
        const data = await response.json()
        setMeals(data)
      })()
   },[])

  return (
    <div>
      <p>Click on Meal for Reservation</p>
    <div>
    {meals.map((meal) => <DisplayMeals key= {meal.id}{...meal}/>                  
    )}
    </div>
    </div>

  );
}