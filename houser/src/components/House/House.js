import React from 'react'

export default function House(props) {
 return (
  <div>
   {props.curr_house.name} <br/>
   {props.curr_house.address} <br/>
   {props.curr_house.city} <br/>
   {props.curr_house.state} <br/>
   {props.curr_house.zip} <br/>
  <button>Delete House</button>
  </div>
 )
}
