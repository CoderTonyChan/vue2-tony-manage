import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 按需求加载
const Login = r => require.ensure([], () => r(require('../components/Login')), 'Login')
const Manage = r => require.ensure([], () => r(require('../components/Manage')), 'Manage')

const Home = r => require.ensure([], () => r(require('../components/Home')), 'Home')

// 添加
const AddShop = r => require.ensure([], () => r(require('../components/AddShop')), 'AddShop')
const AddGoods = r => require.ensure([], () => r(require('../components/AddGoods')), 'AddGoods')

// 数据管理
const ShopList = r => require.ensure([], () => r(require('../components/ShopList')), 'ShopList')
const FoodList = r => require.ensure([], () => r(require('../components/FoodList')), 'FoodList')

const UserList = r => require.ensure([], () => r(require('../components/UserList')), 'UserList') // 这个名字几乎没用上 因为页面管理全是由Router管理的 push也是Router
const AdminList = r => require.ensure([], () => r(require('../components/AdminList')), 'AdminList')
const OrderList = r => require.ensure([], () => r(require('../components/OrderList')), 'OrderList')

// 用户分布
const Visitor = r => require.ensure([], () => r(require('../components/Visitor')), 'Visitor')
const NewMember = r => require.ensure([], () => r(require('../components/NewMember')), 'NewMember') // 挖坑
// 编辑
const VueEdit = r => require.ensure([], () => r(require('../components/VueEdit')), 'VueEdit')
// 设置
const AdminSet = r => require.ensure([], () => r(require('../components/AdminSet')), 'AdminSet')
// 说明
const Explain = r => require.ensure([], () => r(require('../components/Explain')), 'Explain')
// 挖坑
const UploadImg = r => require.ensure([], () => r(require('../components/UploadImg')), 'UploadImg')
const SendMessage = r => require.ensure([], () => r(require('../components/SendMessage')), 'SendMessage')

Vue.use(Router)

export default new Router({
  // 路由没做登录管理 直接打开页面是可以的 or 在后端其实已经做了
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/manage',
      component: Manage,
      name: '',
      children: [
        {
          path: '',
          component: Home,
          meta: []
        },
        {
          path: '/addShop',
          component: AddShop,
          meta: ['添加数据', '添加商铺'] // 用来做导航用的
        },
        {
          path: '/addGoods',
          component: AddGoods,
          meta: ['数据管理', '用户列表'] // 用来做导航用的
        },
        {
          path: '/ShopList',
          component: ShopList,
          meta: ['数据管理', '商家列表'] // 用来做导航用的
        },
        {
          path: '/foodList',
          component: FoodList,
          meta: ['数据管理', '食品列表'] // 用来做导航用的
        },
        {
          path: '/UserList',
          component: UserList,
          meta: ['数据管理', '用户列表'] // 用来做导航用的
        },
        {
          path: '/AdminList',
          component: AdminList,
          meta: ['数据管理', '管理员列表'] // 用来做导航用的
        },
        {
          path: '/OrderList',
          component: OrderList,
          meta: ['数据管理', '订单列表'] // 用来做导航用的
        },
        {
          path: '/Visitor',
          component: Visitor,
          meta: ['图表', '用户分布'] // 用来做导航用的
        },
        {
          path: '/NewMember',
          component: NewMember,
          meta: ['图表', '用户数据'] // 用来做导航用的
        },
        {
          path: '/VueEdit',
          component: VueEdit,
          meta: ['编辑', '文本编辑'] // 用来做导航用的
        },
        {
          path: '/AdminSet',
          component: AdminSet,
          meta: ['设置', '管理员设置'] // 用来做导航用的
        },
        {
          path: '/Explain',
          component: Explain,
          meta: ['说明', '说明'] // 用来做导航用的
        },
        {
          path: '/UploadImg',
          component: UploadImg,
          meta: ['文本编辑', 'MarkDown'] // 用来做导航用的
        },
        {
          path: '/SendMessage',
          component: SendMessage,
          meta: ['设置', '发送通知']
        }
      ]
      // children: [{
      //   path: '',
      //   component: home,
      //   meta: [],
      // }, {
      //   path: '/addShop',
      //   component: addShop,
      //   meta: ['添加数据', '添加商铺'],
      // }, {
      //   path: '/addGoods',
      //   component: addGoods,
      //   meta: ['添加数据', '添加商品'],
      // }, {
      //   path: '/userList',
      //   component: userList,
      //   meta: ['数据管理', '用户列表'],
      // }, {
      //   path: '/shopList',
      //   component: shopList,
      //   meta: ['数据管理', '商家列表'],
      // }, {
      //   path: '/foodList',
      //   component: foodList,
      //   meta: ['数据管理', '食品列表'],
      // }, {
      //   path: '/orderList',
      //   component: orderList,
      //   meta: ['数据管理', '订单列表'],
      // }, {
      //   path: '/adminList',
      //   component: adminList,
      //   meta: ['数据管理', '管理员列表'],
      // }, {
      //   path: '/visitor',
      //   component: visitor,
      //   meta: ['图表', '用户分布'],
      // }, {
      //   path: '/newMember',
      //   component: newMember,
      //   meta: ['图表', '用户数据'],
      // }, {
      //   path: '/uploadImg',
      //   component: uploadImg,
      //   meta: ['文本编辑', 'MarkDown'],
      // }, {
      //   path: '/vueEdit',
      //   component: vueEdit,
      //   meta: ['编辑', '文本编辑'],
      // }, {
      //   path: '/adminSet',
      //   component: adminSet,
      //   meta: ['设置', '管理员设置'],
      // }, {
      //   path: '/sendMessage',
      //   component: sendMessage,
      //   meta: ['设置', '发送通知'],
      // }, {
      //   path: '/explain',
      //   component: explain,
      //   meta: ['说明', '说明'],
      // }]
    }
  ]
})
