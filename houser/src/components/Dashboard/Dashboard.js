import React from 'react'
import House from '../House/House'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
 constructor() {
  super() 

  this.state = {
   curr_houses: [],
   redirect: false
  }
 }

 componentDidMount() {
  axios.get('/api/houses').then(res => {
   this.setState({curr_houses : res.data})
  })
 }

deleteHouse = (id) => {
 axios.delete('/api/deletehouse?id=' + id).then(res => {
  this.setState({curr_houses: res.data});
 })
}

 render() {
  let user = '';

  if(this.props.user === '') {
   user = 'Not Logged In.';
  }
  else {
   user = this.props.user;
  }

  let houses = this.state.curr_houses.map((house, i) => {
   return (
    <div key={ i + house }>
     <House curr_house={house}
            deleteHouse={this.deleteHouse}
     />    
    </div>
   );
  })
 return (
  <div>
   <h1>{user}</h1>
   <Link to={`/wizard/stepone/${user}`}><button>Add New Property</button></Link>
   {houses}
  </div>
  )
 }
}
function mapStateToProps(state) {
 let { user } = state;
 return {
  user
 }
}
export default connect(mapStateToProps)(Dashboard)