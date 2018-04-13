import React from 'react'
import House from '../House/House'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
 constructor() {
  super() 

  this.state = {
   curr_houses: [],
   redirect: false
  }
 }

 componentDidMount() {
  axios.get('/api/houses').then(res => {
   this.setState({curr_houses : res.data})
  })
 }

deleteHouse = (id) => {
 axios.delete('/api/deletehouse?id=' + id).then(res => {
  this.setState({curr_houses: res.data});
 })
}

 render() {

  let houses = this.state.curr_houses.map((house, i) => {
   return (
    <div key={ i + house }>
     <House curr_house={house}
            deleteHouse={this.deleteHouse}
     />    
    </div>
   );
  })
 return (
  <div>
   <Link to='/wizard/stepone'><button>Add New Property</button></Link>
   {houses}
  </div>
  )
 }
}
