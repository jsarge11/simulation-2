import React from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
 render() {
 return (
  <div>
   <Link to='/wizard'><button>Add New Property</button></Link>
   <House/>
  </div>
  )
 }
}
