// import { requestConditional } from "../service";
// const request = requestConditional;
const apiPrefix = "/sys-base-api";
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  // 登录
  login (data = {}) {
    return request({
      url: apiPrefix + "/auth/login",
      method: 'post',
      data
    })
  },
  // 基本信息
  mine() {
    return request({
      url: apiPrefix + "/auth/curUser",
      method: 'get'
    })
  },
  // 退出登录
  logout() {
    return request({
      url: apiPrefix + "/auth/logout",
      method: 'get'
    })
  }
})
