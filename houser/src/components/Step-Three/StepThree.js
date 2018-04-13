import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateFinance } from '../../ducks/reducer'
import axios from 'axios'


class StepThree extends React.Component {

 constructor() {
  super()

  this.state = {
   monthly_mortgage: 0,
   desired_rent: 0,
   redirect: false,
  }
 }

 componentDidMount() {
  console.log('setting state on step three')
  this.setState({ 
   monthly_mortgage: this.props.monthly_mortgage,
   desired_rent: this.props.desired_rent
  })
 }

 updateMonthlyMortgage(value) {

  this.setState({monthly_mortgage: value })
 }
 updateDesiredRent(value) {
  this.setState({desired_rent: value })
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
   <input type="text" value={this.state.monthly_mortgage} placeholder="monthly mortgage ... " onChange={(e)=>this.updateMonthlyMortgage(e.target.value)} />
   <input type="text" value={this.state.desired_rent} placeholder="desired rent ... " onChange={(e)=>this.updateDesiredRent(e.target.value)} /><br/>

  <Link to='/wizard/steptwo'><button onClick={()=>this.props.updateFinance(this.state.monthly_mortgage, this.state.desired_rent)}>Go Back</button></Link>
  <button onClick={()=>this.createHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}> Complete </button>
  </div>
  )
 }
}
function mapStateToProps(state) {
 let { name, address, city, usstate, zip, imageurl, monthly_mortgage, desired_rent } = state;
 return {
  name,
  address,
  city,
  usstate,
  zip,
  imageurl,
  monthly_mortgage,
  desired_rent
 }
}
export default connect(mapStateToProps, {updateFinance})(StepThree)
