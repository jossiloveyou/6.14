import { handleActions } from 'redux-actions'
const defaultdata = {
  data: [],
  selectedRowKeys: []
}

export default handleActions({
  'TAGS': (state, action) => 
    ({ ...state, data: action.payload}),
  'SELECTTAGS': (state, action) => 
    ({ ...state, selectedRowKeys: [...action.payload] })
}, defaultdata)

