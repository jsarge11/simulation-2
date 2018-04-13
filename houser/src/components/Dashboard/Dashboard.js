import React from 'react'
import House from '../House/House'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
 constructor() {
  super() 

  this.state = {
   curr_houses: []
  }
 }

 componentDidMount() {
  axios.get('/api/houses').then(res => {
   this.setState({curr_houses : res.data})
  })
 }
 render() {
  let houses = this.state.curr_houses.map((house, i) => {
   return (
    <div key={ i + house }>
     <House curr_house={house}/>    
    </div>
   );
  })
 return (
  <div>
   <Link to='/wizard'><button>Add New Property</button></Link>
   {houses}
  </div>
  )
 }
}
