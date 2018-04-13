import React from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends React.Component {
 render() {
  return (
  <div>
   Wizard
   <Link to='/'><button>Cancel</button></Link>
  </div>
  )
 }
}