import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Search = () => import('views/search/Search')
const Person = () => import('views/search/Person')
const Detail = () => import('views/detail/Detail')

const News = () => import('views/news/News')

const Rank = () => import('views/rank/Rank')

// 个人中心
const Profile = () => import('views/profile/Profile')
  const Info = () => import('views/profile/Info')
    const EditeName = () => import('views/profile/infos/EditeName')
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
  // person
  {
    path: '/person',
    component: Person
  },
  // detail
  {
    path: '/detail/:id',
    component: Detail,
    children: [

    ]
  },
  // detail
  {
    path: '/news/:id',
    component: News,
  },
  // rank
  {
    path: '/rank',
    component: Rank
  },
  // profile
  {
    path: '/profile',
    component: Profile,
    children: [
      // info
      {
        path: 'info',
        component: Info,
        children: [
          //edite_name
          {
            path: 'edite_name',
            component: EditeName
          }
        ]
      },
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