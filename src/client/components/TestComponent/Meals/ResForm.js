import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

export function ResForm({title}){
    const {id} = useParams();
  const [name, setName] = useState("");
const [number, setNumber] = useState();
const [email, setEmail] = useState("");
const [guests, setGuests] = useState();
//console.log(name);
  function onSubmit(){
    if(name!== ''){
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
    alert('your resrvation is booked')
  }
  else{
    alert('please enter your details')
  }
}

return (
    <div>
      <h2>
        {title}
      </h2>
<form>
  <label>
    Name:
    <input type="text" value = {name} onChange= {(e) => setName(e.target.value) } required />
  </label><br/>
  <label>
    Number of guests:
    <input type="number" value = {guests} onChange= {(e) => setGuests(e.target.value) } required />
  </label><br/>
  <label>
    Phonenumber:
    <input type="number" value = {number} onChange= {(e) => setNumber(e.target.value) }  required/>
  </label><br/>
  <label>
    Email:
    <input type="text" value = {email} onChange= {(e) => setEmail(e.target.value)}  required/>
  </label><br/>
  <button  onClick= {onSubmit} >submit </button>
</form>
    </div>
)
}