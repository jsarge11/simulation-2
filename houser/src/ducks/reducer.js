let initialState = {
 name: '',
 address: '',
 city: '',
 usstate: '',
 zip: '',
 imageurl: '',
 monthly_mortgage: 0,
 desired_rent: 0,
}

const UPDATE_INFO = 'UPDATE_INFO'

export function updateInfo(name, address, city, usstate, zip) {
 return {
  type: UPDATE_INFO,
  payload: name,address,city,usstate,zip
 }
}

export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(UPDATE_INFO) :
   return Object.assign({}, state, {name: action.payload})
  default:
   return state;
 }
}