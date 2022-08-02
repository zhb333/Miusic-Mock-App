// pages/home-video/index.js
import { getTopMV }from '../../service/api_video'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getTopMV(10).then(res => {
      this.setData({topMVs: res.data.data})
    })
  },
})