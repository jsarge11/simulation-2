import React from 'react'
import { Link } from 'react-router-dom'
export default class StepOne extends React.Component {

 constructor() {
  super()

  this.state = {
   name: '',
   address: '',
   city: '',
   state: '',
   zip: '',
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
   <input type="text" value={this.state.name} placeholder="name ... " onChange={(e)=>this.updateName(e.target.value)} />
   <input type="text" value={this.state.address} placeholder="address ... " onChange={(e)=>this.updateAddress(e.target.value)} />
   <input type="text" value={this.state.city} placeholder="city ... " onChange={(e)=>this.updateCity(e.target.value)} />
   <input type="text" value={this.state.state} placeholder="state ... " onChange={(e)=>this.updateState(e.target.value)} />
   <input type="text" value={this.state.zip} placeholder="zip ... " onChange={(e)=>this.updateZip(e.target.value)} />
   <br/>
   
   <Link to='/'><button>Go Back</button></Link>
   <Link to='/wizard/steptwo'><button>Next Step</button></Link>
  </div>
  )
 }
}