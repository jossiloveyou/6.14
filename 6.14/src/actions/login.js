import { post } from '@/utils/request'
import api from '@/services/api'


export function getName (options) {
  return {
    type: 'FETCH_HOOK_LOGIN',
    payload: post(api.login, options),
  }
}
