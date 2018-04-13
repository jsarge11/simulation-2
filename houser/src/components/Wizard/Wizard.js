import React from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends React.Component {
 constructor() {
  super()

  this.state = {
   name: '',
   address: '',
   city: '',
   state: '',
   zip: ''
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
 
 render() {
  return (
  <div>
   Wizard
   <input type="text" value={this.state.name} placeholder="enter here ... " onChange={()=>this.updateName()} />
   <input type="text" value={this.state.address} placeholder="enter here ... " onChange={()=>this.updateAddress()} />
   <input type="text" value={this.state.city} placeholder="enter here ... " onChange={()=>this.updateCity()} />
   <input type="text" value={this.state.state} placeholder="enter here ... " onChange={()=>this.updateState()} />
   <input type="text" value={this.state.zip} placeholder="enter here ... " onChange={()=>this.updateZip()} />
   
   <Link to='/'><button>Cancel</button></Link>
  </div>
  )
 }
}