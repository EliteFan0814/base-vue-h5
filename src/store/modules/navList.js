const state = {
  list: [
    {
      title: '首页',
      path: '/',
      name: 'Home',
      icon: require('@/assets/img/bottom/index.png'),
      activeIcon: require('@/assets/img/bottom/index-fill.png')
    },
    {
      title: '购物车',
      path: '/shopCart',
      name: 'ShopCart',
      icon: require('@/assets/img/bottom/cart.png'),
      activeIcon: require('@/assets/img/bottom/cart-fill.png')
    },
    {
      title: '订单',
      path: '/order',
      name: 'Order',
      icon: require('@/assets/img/bottom/order.png'),
      activeIcon: require('@/assets/img/bottom/order-fill.png')
    },
    {
      title: '我的',
      path: '/my',
      name: 'My',
      icon: require('@/assets/img/bottom/my.png'),
      activeIcon: require('@/assets/img/bottom/my-fill.png')
    }
  ]
}

export default {
  namespaced: true,
  state
}
