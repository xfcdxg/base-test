import { get, send } from 'mulan-lib'
import { appid, baseUrl } from './'

const wx_login = '/api/loginByWeixinMpCode.xhtml'

const wx_userinfo = '/api/getLoginMemberInfo.xhtml'

const save_answer = '/api/saveAnswers.xhtml'

export const wx_auth = recomId =>
  `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${ appid }&redirect_uri=${ encodeURIComponent(`${ window.location.protocol }${ baseUrl }${ window.location.pathname }${ window.location.search }`) }&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`

export const getSession = (code, recomId = '') => get(wx_login, { code, recomId })

export const getUserinfo = api_u_key => get(wx_userinfo, { api_u_key })

export const saveAnwser = (api_u_key, answers) => get(save_answer, { api_u_key, answers })
