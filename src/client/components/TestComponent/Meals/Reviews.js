import React, {useState,useEffect} from "react";
import { Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import './mealcss/cardrender.css';

export function Review() {
    const {id} = useParams();
    const[stars, setStars] = useState();
    const[title, setTitle] = useState('');
    console.log(stars)
    console.log(title)


  function submitReview (){  
    (async() => { 
        try{
          fetch('/api/reservations',{
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
              contact_phonenumber: number,
              meal_id : id,
              number_of_guests: guests,
              contact_name:name,
              contact_email:email 
              })
          });
        }
          catch (error){
            throw error;
          }
      })()
    }
 return(
  <div className="reviewcontainer">
    <form>
    <label>Review:  
      <input type='text' value = {title} onChange= {(e) => setTitle(e.target.value) } required /></label><br/>
    <label>stars:  </label>
    <input type="number" value = {stars} onChange= {(e) => setStars(e.target.value) } required /><br/>
    <Link to='/'>
    <button  onClick= {submitReview} >submit </button>
    </Link>
  </form>
  </div>
 )
}