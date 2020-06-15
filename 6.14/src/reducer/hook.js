const hookdata = {
  data: []
}

export default function hook (state = hookdata, action) {
  switch(action.type){
    case 'FETCH_HOOK_LIST':
      return { ...state, data: action.payload }
    case 'FETCH_HOOK_DEL':
      if(action.payload.status == 200){
        alert('删除成功')
      }
      return { ...state }
    case 'FETCH_HOOK_ADD':
      if(action.payload.status == 200){
        alert('添加成功')
      }
      return { ...state }
    case 'FETCH_HOOK_UPDATE':
      console.log(action.payload)
      if(action.payload.status == 200){
        alert('修改成功')
      }
      return { ...state }
    default:
      return { ...state }
  }
}