import icon_session from '../../assets/images/icon-session.png';
import icon_sentry from '../../assets/images/icon-sentry.png';
import icon_news_paper from '../../assets/images/icon-news-paper.png';
import icon_cloud_bridge from '../../assets/images/icon-cloud-bridge.png';
import icon_selection from '../../assets/images/icon-selection.png';
import icon_community from '../../assets/images/icon-community.png';
import icon_live from '../../assets/images/icon-live.png';
import icon_color from '../../assets/images/icon-color.png';

const passMenus = [
  {
    id: 1,
    title: '政会通',
    desc: '智能会务系统',
    icon: icon_session,
    path: '/pass/platform/1'
  },
  {
    id: 2,
    title: '政讯报',
    desc: '郡县政务参考',
    icon: icon_news_paper,
    path: '/pass/platform/2'
  },
  {
    id: 3,
    title: '小康优选',
    desc: '百县地标精品认证中心',
    icon: icon_selection,
    path: '/pass/platform/3'
  },
  {
    id: 4,
    title: '圆点直播',
    desc: '政经民生视频直播平台',
    icon: icon_live,
    path: '/pass/platform/4'
  },
  {
    id: 5,
    title: '卡乐图片',
    desc: '原创图片数据库',
    icon: icon_color,
    path: '/pass/platform/5'
  },
  {
    id: 6,
    title: '微讯社',
    desc: '郡县资讯门户互联服务社',
    icon: icon_community,
    path: '/pass/platform/6'
  },
  {
    id: 7,
    title: '郡县云桥',
    desc: '县域资讯自助采集系统',
    icon: icon_cloud_bridge,
    path: '/pass/platform/7'
  },
  {
    id: 8,
    title: '政网哨',
    desc: '舆情预警系统',
    icon: icon_sentry,
    path: '/pass/platform/8'
  },
]

export {
  passMenus
}
