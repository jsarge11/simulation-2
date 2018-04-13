import React from 'react'
import { Link, Route } from 'react-router-dom'
import StepOne from '../Step-One/StepOne'
import StepTwo from '../Step-Two/StepTwo'
import StepThree from '../Step-Three/StepThree'


export default class Wizard extends React.Component {
 render() {
  return (
  <div>
   <Route path="/wizard/stepone" component={StepOne}/>
   <Route path="/wizard/steptwo" component={StepTwo}/>
   <Route path="/wizard/stepthree" component={StepThree}/>
   <Link to='/'><button> Cancel </button></Link>
  </div>
  )
 }
}