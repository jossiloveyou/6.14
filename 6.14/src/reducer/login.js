const hookdata = {
  data: []
}

export default function login (state = hookdata, action) {
  switch(action.type){
    case 'FETCH_HOOK_LOGIN':
      return { ...state, data: action.payload }
    default:
      return { ...state }
  }
}