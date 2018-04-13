import React from 'react'

export default function House(props) {
 return (
  <div>
   {props.curr_house.name} <br/>
   {props.curr_house.address} <br/>
   {props.curr_house.city} <br/>
   {props.curr_house.state} <br/>
   {props.curr_house.zip} <br/>
   {props.curr_house.imageurl} <br/>
   {props.curr_house.monthly_mortgage} <br/>
   {props.curr_house.desired_rent} <br/>
   
  <button onClick={()=>props.deleteHouse(props.curr_house.house_id)}>Delete House</button>
  </div>
 )
}
