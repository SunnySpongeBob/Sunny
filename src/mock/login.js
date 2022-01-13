/*
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2021-12-29 16:53:37
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-04 10:24:48
 */
import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  console.log('req', req);

  req = JSON.parse(req.body)
  // console.log('req', req, USER_MAP[req.userName]);
  return { token: USER_MAP[req.userName].token }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
