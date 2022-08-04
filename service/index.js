const BASE_URL = "http://localhost:3000"
class HYRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${BASE_URL}${url}`,
        method,
        data: params,
        success: function (res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params) {
    return this.request(url, 'GET', params)
  }

  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

const hyRequest = new HYRequest()

export default hyRequest