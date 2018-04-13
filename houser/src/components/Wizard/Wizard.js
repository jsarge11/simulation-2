import React from 'react'
import { Link, Route } from 'react-router-dom'
import StepOne from '../Step-One/StepOne'
import StepTwo from '../Step-Two/StepTwo'
import StepThree from '../Step-Three/StepThree'
import { connect } from 'react-redux'
import { cancel } from '../../ducks/reducer'


class Wizard extends React.Component {
 render() {
  return (
  <div>
   <Route path="/wizard/stepone/:user" component={StepOne}/>
   <Route path="/wizard/steptwo/:user" component={StepTwo}/>
   <Route path="/wizard/stepthree/:user" component={StepThree}/>
   <Link to='/'><button onClick={()=>this.props.cancel()}> Cancel </button></Link>
  </div>
  )
 }
}
export default connect(null, { cancel})(Wizard)
