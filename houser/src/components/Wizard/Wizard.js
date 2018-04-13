import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends React.Component {
 constructor() {
  super()

  this.state = {
   name: '',
   address: '',
   city: '',
   state: '',
   zip: '',
   redirect: false,
  }
 }
 updateName(value) {
  this.setState({name: value })
 }
 updateAddress(value) {
  this.setState({address: value })
 }
 updateCity(value) {
  this.setState({city: value })
 }
 updateState(value) {
  this.setState({state: value })
 }
 updateZip(value) {
  this.setState({zip: value })
 }
 createHouse(name, address, city, state, zip) {
  axios.post('/api/createhouse/', {name, address, city, state, zip}).then (res => {
   this.setState({redirect: true})
  })
 }
 
 render() {
  if (this.state.redirect) {
   return <Redirect push to="/"/>
  }

  return (

  <div>
   Wizard
   <input type="text" value={this.state.name} placeholder="enter here ... " onChange={(e)=>this.updateName(e.target.value)} />
   <input type="text" value={this.state.address} placeholder="enter here ... " onChange={(e)=>this.updateAddress(e.target.value)} />
   <input type="text" value={this.state.city} placeholder="enter here ... " onChange={(e)=>this.updateCity(e.target.value)} />
   <input type="text" value={this.state.state} placeholder="enter here ... " onChange={(e)=>this.updateState(e.target.value)} />
   <input type="text" value={this.state.zip} placeholder="enter here ... " onChange={(e)=>this.updateZip(e.target.value)} />
   
  <button onClick={()=>this.createHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}> Complete </button>
   <Link to='/'><button> Cancel </button></Link>
  </div>
  )
 }
}