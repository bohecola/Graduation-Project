import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Search = () => import('views/search/Search')

const Car = () => import('views/car/Car')

// 个人中心
const Profile = () => import('views/profile/Profile')
  const Feedback = () => import('views/profile/Feedback')
  const ContactUs = () => import('views/profile/ContactUs')
  const Setting = () => import('views/profile/Setting')
    const UserAgreement = () => import('views/profile/settings/UserAgreement')
    const PrivacyPolicy = () => import('views/profile/settings/PrivacyPolicy')
    const AboutUs = () => import('views/profile/settings/AboutUs')
    const ResetPassword = () => import('views/profile/settings/ResetPassword')
    

const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')




// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  // home
  {
    path: '/home',
    component: Home
  },
  // search
  {
    path: '/search',
    component: Search
  },
  // car
  {
    path: '/car',
    component: Car
  },
  // profile
  {
    path: '/profile',
    component: Profile,
    children: [
      // feedback
      {
        path: 'feedback',
        component: Feedback
      },
      // contact_us
      {
        path:'contact_us',
        component: ContactUs
      },
      // setting
      {
        path: 'setting',
        component: Setting,
        children: [
          // user_agreement
          {
            path: 'user_agreement',
            component: UserAgreement
          },
          // privacy_policy
          {
            path: 'privacy_policy',
            component: PrivacyPolicy
          },
          // about_us
          {
            path: 'about_us',
            component: AboutUs
          },
          // reset_password
          {
            path: 'reset_password',
            component: ResetPassword
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router