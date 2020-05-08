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
    desc: '智能会议系统',
    icon: icon_session,
    path: '/pass/platform/1'
  },
  {
    id: 2,
    title: '郡县云桥',
    desc: '县域自助采编系统',
    icon: icon_cloud_bridge,
    path: '/pass/platform/7'
  },
  {
    id: 3,
    title: '卡乐图片',
    desc: '原创的图像数据库',
    icon: icon_color,
    path: '/pass/platform/5'
  },
  {
    id: 4,
    title: '圆点直播',
    desc: '政经民生视频直播',
    icon: icon_live,
    path: '/pass/platform/4'
  },
  {
    id: 5,
    title: '小康优选',
    desc: '县域优品电商平台',
    icon: icon_selection,
    path: '/pass/platform/3'
  },

  {
    id: 6,
    title: '政网哨',
    desc: '舆情预警系统',
    icon: icon_sentry,
    path: '/pass/platform/8'
  },
  {
    id: 7,
    title: '微讯社',
    desc: '郡县资讯门户',
    icon: icon_community,
    path: '/pass/platform/6'
  },
  {
    id: 8,
    title: '政讯报',
    desc: '郡县政务参考',
    icon: icon_news_paper,
    path: '/pass/platform/2'
  }
]

export {
  passMenus
}
