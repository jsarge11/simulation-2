import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateInfo } from '../../ducks/reducer'



class StepOne extends React.Component {

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
 componentDidMount() {
  console.log('setting state on step one')
  this.setState({ 
   name: this.props.name,
   address: this.props.address,
   city: this.props.city,
   state: this.props.usstate,
   zip: this.props.zip,
  })
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
  
  let {name, address, city, state, zip} = this.state;
 
  return (
   <div>
   <h1>{this.props.match.params.user}</h1>
   <input type="text" value={this.state.name} placeholder="name ... " onChange={(e)=>this.updateName(e.target.value)} />
   <input type="text" value={this.state.address} placeholder="address ... " onChange={(e)=>this.updateAddress(e.target.value)} />
   <input type="text" value={this.state.city} placeholder="city ... " onChange={(e)=>this.updateCity(e.target.value)} />
   <input type="text" value={this.state.state} placeholder="state ... " onChange={(e)=>this.updateState(e.target.value)} />
   <input type="text" value={this.state.zip} placeholder="zip ... " onChange={(e)=>this.updateZip(e.target.value)} />
   <br/>
   
   <Link to='/'><button>Go Back</button></Link>
   <Link to={`/wizard/steptwo/${this.props.match.params.user}`}><button onClick={()=>this.props.updateInfo(name, address, city, state, zip)}>Next Step</button></Link>
  </div>
  )
 }
}
function mapStateToProps(state) {
 let {name, address, city, usstate, zip} = state;
 return {
  name,
  address,
  city,
  usstate,
  zip
 }
}

export default connect(mapStateToProps, { updateInfo })(StepOne)