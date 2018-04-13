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



export default function reducer(state = initialState, action) {
 switch(action.type) {
  default:
   return state;
 }
}