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
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_FINANCE = 'UPDATE_FINANCE'

export function updateInfo(name, address, city, usstate, zip) {
 return {
  type: UPDATE_INFO,
  payload: {name,address,city,usstate,zip}
 }
}
export function updateImg(image_url) {
 return {
  type: UPDATE_IMAGE,
  payload: image_url
 }
}
export function updateFinance(monthlymortgage, desiredrent) {
 return {
  type: UPDATE_FINANCE,
  payload: {monthlymortgage, desiredrent}
 }
}

export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(UPDATE_INFO) :
   return Object.assign({}, state, {name: action.payload.name, 
                                    address: action.payload.address, 
                                    city: action.payload.city,
                                    usstate : action.payload.usstate,
                                    zip: action.payload.zip,   
                                   })
  case(UPDATE_IMAGE) :
   return Object.assign({}, state, {image_url: action.payload})
  case(UPDATE_FINANCE) :
   return Object.assign({}, state, {monthly_mortgage: action.payload.monthly_mortgage, desired_rent: action.payload.desired_rent})

  default:
   return state;
 }
}