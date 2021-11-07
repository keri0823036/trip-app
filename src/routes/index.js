import Home from '@/pages/Home'
// import Now from '@/pages/Now'
import Spots from '@/pages/Spots'

const routes = [
  { path: '/',name: "行程表", handle: 'home', component: Home },
  // { path: '/now',name: "旅途", handle: 'now', component: Now },
  { path: '/spots',name: "景點", handle: 'spots', component: Spots }
]

export default routes
  