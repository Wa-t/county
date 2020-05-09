import PassRouter from './PassRouter';
import HomePage from '../pages/home';
import HundredCounty from '../pages/hundred';
import Channel from '../pages/channel';
import Pass from '../pages/pass';
import Platform from '../pages/pass/platform';
import About from '../pages/about';
import Member from '../pages/member';
import Cooperation from '../pages/cooperation';
import HundredDetail from '../pages/hundredDetail';
import Declaration from '../pages/declaration'


const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    isShow: false,
  },
  {
    path: '/bang',
    component: HundredCounty,
    name: '百县榜',
  },
  {
    path: '/channel',
    component: Channel,
    name: '郡县号'
  },
  {
    path: '/about',
    component: About,
    name: '关于我们',
    isShow: false
  },
  {
    path: '/member',
    component: Member,
    name: '会员中心',
    isShow: false
  },
  {
    path: '/tong',
    component: PassRouter,
    name: '郡县通',
    showSub: false,
    routes: [
      {
        path: '/tong',
        component: Pass,
        name: '郡县通',
        exact: true
      },
      {
        path: '/tong/platform/:id/:title/:name',
        component: Platform,
        name: '郡县通文章',
      },
      {
        path: '/tong/platform/:id/:title',
        component: Platform,
        name: '郡县通平台',
      }
    ]
  },
  {
    path: '/cooperation',
    component: Cooperation,
    name: '榜单合作',
    isShow: false
  },
  {
    path: '/appDetail',
    component: HundredDetail,
    name: '百县榜详情',
    isShow: false
  },
  {
    path: '/declaration',
    component: Declaration,
    name: '榜单申报',
    isShow: false
  },

  {
    // path: '/a1',
    component: null,
    name: '县域联播',
    foreignSite: {
      path: 'http://xianyu.chinaxiaokang.com/map.html'
    }
  },
  {
    // path: '/a2',
    component: null,
    name: '百县工程',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/'
    }
  },
  {
    // path: '/a3',
    component: null,
    name: '中国小康指数',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/'
    }
  },
  {
    // path: '/a4',
    component: null,
    name: '中国小康网',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/'
    }
  },
  {
    path: '*',
    component: HomePage,
    name: '',
  },
];

export default routes;
