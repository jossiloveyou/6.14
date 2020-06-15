import { post } from '@/utils/request'
import api from '@/services/api'


export function getName (options) {
  return {
    type: 'FETCH_HOOK_LIST',
    payload: post(api.list),
  }
}


export function delName (options) {
  return {
    type: 'FETCH_HOOK_DEL',
    payload: post(api.del, options),
  }
}

export function addName (options) {
  return {
    type: 'FETCH_HOOK_ADD',
    payload: post(api.add, options),
  }
}

export function updateName (options) {
  return {
    type: 'FETCH_HOOK_UPDATE',
    payload: post(api.update, options),
  }
}