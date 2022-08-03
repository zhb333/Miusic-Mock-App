// pages/home-video/index.js
import {
  getTopMV
} from '../../service/api_video'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.getTopMvData(0)
  },

  // 封装网络请求的方法
  async getTopMvData(offset) {
    if (!this.data.hasMore) return
    // 展示加载动画
    wx.showNavigationBarLoading()
    const res = await getTopMV(offset)
    let newData = this.data.topMVs
    if (offset === 0) {
      newData = res.data
    } else {
      newData = newData.concat(res.data)
    }
    this.setData({
      topMVs: newData,
      hasMore: res.hasMore
    })
    wx.hideNavigationBarLoading()
    if (this.offset === 0) {
      wx.stopPullDownRefresh()
    }
  },
  handleVideoItemClick(event) {
    const id = event.currentTarget.dataset.item.id
    wx: wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`
    })
    console.log(id)
  },
  // 其他的生命周期回调函数
  async onPullDownRefresh() {
    this.getTopMvData(0)
  },

  async onReachBottom() {
    this.getTopMvData(this.data.topMVs.length)
  },
})