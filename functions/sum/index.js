// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()


  wx.cloud.callFunction({
    // 云函数名称
    name: 'sum',
    // 传给云函数的参数
    data: {
      a: 1,
      b: 2,
    },
    success: function(res) {
      console.log(res.result.sum)             // 3
    },
    fail: console.error
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}