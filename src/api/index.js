
/* 接口定义 */

export default {
  apis: [
    {
      name: 'verifyPhoneExists',
      method: 'POST',
      desc: '验证手机号是否已注册',
      path: '/user/verifyPhoneExists'
    },
    {
      name: 'verifyNickNameExists',
      method: 'POST',
      desc: '验证昵称是否已注册',
      path: '/user/verifyNickNameExists'
    },
    {
      name: 'verifyUsernameExists',
      method: 'POST',
      desc: '验证用户名是否已注册',
      path: '/user/verifyUsernameExists'
    },
    {
      name: 'swiperlist',
      method: 'GET',
      desc: '获取首页轮播资源',
      path: '/advertisement/getAdvertisementList'
    },
    {
      name: 'getExerciseFlow',
      method: 'GET',
      desc: '获取闯关流程',
      path: '/exercise/getExerciseFlow'
    },
    {
      name: 'getCommodityCategoryList',
      method: 'GET',
      desc: ' 获取商品分类列表',
      path: '/commodityCategory/getCommodityCategoryList'
    },
    {
      name: 'getCommodityDetial',
      method: 'GET',
      desc: ' 获取商品详情',
      path: '/commodity/getCommodityDetial'
    },
    {
      name: 'login',
      method: 'POST',
      desc: '登录',
      path: '/user/login'
    },
    {
      name: 'logout',
      method: 'GET',
      desc: '注销',
      path: '/user/logout'
    },
    {
      name: 'checkValidateCode',
      method: 'POST',
      desc: '验证图形验证码',
      path: '/user/checkValidateCode'
    },
    {
      name: 'sendMsg',
      method: 'POST',
      desc: '发送短信验证码',
      path: '/user/sendMsg'
    },
    {
      name: 'verifyMsg',
      method: 'POST',
      desc: '验证短信验证码',
      path: '/user/verifyMsg'
    },
    {
      name: 'register',
      method: 'POST',
      desc: '注册用户',
      path: '/user/register'
    },
    {
      name: 'updatePassword',
      method: 'POST',
      desc: '修改密码',
      path: '/user/updatePassword'
    },
    {
      name: 'categoryList',
      method: 'GET',
      desc: '我的闯关-商品卡片列表',
      path: '/pass/categoryList'
    },
    {
      name: 'score',
      method: 'GET',
      desc: '我的闯关成绩',
      path: '/pass/score'
    },
    {
      name: 'orderDetail',
      method: 'POST',
      desc: '订单详情页',
      path: '/order/orderDetail'
    },
    {
      name: 'alipayPay',
      method: 'GET',
      desc: '支付宝支付',
      path: '/pay/alipayPay'
    },
    {
      name: 'wxCreateQrcode',
      method: 'GET',
      desc: '微信支付',
      path: '/pay/wxCreateQrcode'
    },
    {
      name: 'getPayStatus',
      method: 'GET',
      desc: '订单支付状态',
      path: '/pay/getPayStatus'
    },
    {
      name: 'tePay',
      method: 'GET',
      desc: '免费支付',
      path: '/pay/tePay'
    },
    {
      name: 'isUseOverCommodity',
      method: 'GET',
      desc: '判断是否可以购买',
      path: '/commodity/isUseOverCommodity'
    },
    {
      name: 'getCommodityListById',
      method: 'GET',
      desc: '商品内页详情',
      path: '/commodity/getCommodityListById'
    },
    {
      name: 'verifyRecCode',
      method: 'POST',
      desc: '验证推荐码',
      path: '/user/verifyRecCode'
    },
    {
      name: 'update',
      method: 'POST',
      desc: '更新用户信息',
      path: '/user/update'
    }
  ]
}