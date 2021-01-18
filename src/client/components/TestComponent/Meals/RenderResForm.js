import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ResForm} from "./ResForm"; 


export default function RenderResForm(){

  const {id} = useParams();
  const[mealwithId, setMealwithId ] = useState([])

  useEffect (() => {
    (async() => { 
            const response = await fetch(`/api/meals/${id}`)
           const data = await response.json()
           setMealwithId(data);
          })()
 },[id])
  return (
    <section className="test-component">
     { mealwithId.map((meal) => <ResForm key= {meal.id}{...meal}/>)}
    </section>
  );
}