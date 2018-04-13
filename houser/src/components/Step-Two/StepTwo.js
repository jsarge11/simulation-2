import React from 'react'
import { Link } from 'react-router-dom'

export default class StepOne extends React.Component {

 constructor() {
  super()

  this.state = {
   imageurl: ''
  }
 }
 
 updateImage(value) {
  this.setState({imageurl: value })
 }
 
 render() {
  return (
  <div>
   <input type="text" value={this.state.imageurl} placeholder="imgurl ... " onChange={(e)=>this.updateImage(e.target.value)} /><br/>
   <Link to='/wizard/stepone'><button>Go Back</button></Link>
   <Link to='/wizard/stepthree'><button>Next Step</button></Link>
  </div>
  )
 }
}