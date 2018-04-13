import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImg } from '../../ducks/reducer'

class StepTwo extends React.Component {

 constructor() {
  super()

  this.state = {
   imageurl: ''
  }
 }
 componentDidMount() {
  console.log('setting state on step two')
  console.log(this.props.imageurl)
  this.setState({ 
   imageurl: this.props.imageurl
  })
 }
 updateImage(value) {
  this.setState({imageurl: value })
 }
 
 render() {
  // if (this.props.user)
  return (
  <div>
   <h1>{this.props.match.params.user}</h1>
   <input type="text" value={this.state.imageurl} placeholder="imgurl ... " onChange={(e)=>this.updateImage(e.target.value)} /><br/>
   <Link to={`/wizard/stepone/${this.props.match.params.user}`}><button onClick={()=>this.props.updateImg(this.state.imageurl)}>Go Back</button></Link>
   <Link to={`/wizard/stepthree/${this.props.match.params.user}`}><button onClick={()=>this.props.updateImg(this.state.imageurl)}>Next Step</button></Link>
  </div>
  )
 }
}
function mapStateToProps(state) {
 let { imageurl } = state;
 return {
  imageurl,
 }
}

export default connect(mapStateToProps, {updateImg})(StepTwo)

