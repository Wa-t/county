import React, { Component } from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Banner from '../../component/Banner';
import banner_04 from '../../assets/images/banner_04.png';
import aboutImg from '../../assets/images/about.png'
import { checkFull } from '../../utils';
import './index.less';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount() {
    window.onresize = () => {
      if (!checkFull()) {
        alert('11');
      }
      console.log('resize');
    };
  }

  render() {
    return (
      <Row className="channel-container">
        <Row>
          <Col span={24}>
            {/* <Banner backgroundImage={banner_04} title="客服中心" desc="县域赋能产品中心" /> */}
            <Banner backgroundImage={banner_04} title="客服中心" desc="" />
          </Col>
          <Col span={24}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="#">关于我们</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <div className="page-title">关于郡县网</div>
          <div className="about-page-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-detai-text">
          天下治，郡县安。郡县网（WWW.CLGNEWS.COM）是中国小康网旗下县域政务综合资讯专网，县域大数据赋能服务中心和中国县域发展榜专属发布平台。 
          </div> 
          <div className="about-detai-text">
          中国小康网由求是《小康》杂志社创建并运营，是国家级新闻网站和国家级视频网站。经国务院新闻办审批获得互联网新闻信息服务许可。经国家新闻出版广电总局审批具有信息网络传播
视听节目许可。中国小康网被誉为“中国县域新闻第一网”。
          </div> 
          <div className="about-detai-text">
          郡县网开辟“百县榜”中国县域发展榜单、“郡县号”县域民生视频引擎、“郡县通”县域赋能产品中心、“小康优选”县域地标农品商城和“县域联播”县域新闻资讯联播等五大功能专
区。郡县网联通中国小康网官网和中国小康指数、百县工程、卡乐图片、圆点直播等各大专题频道，链接《小康》新媒体矩阵、郡县榜公众号、郡县通平台和各县域门户站，为全国2800多
个县域开辟县域新闻资讯联播专区，日均上线县域资讯逾30000条，网站拥有百万级关注读者，日均阅读流量逾千万。郡县网关注民生，服务县域，致力于成为中国县域发展的资讯赋能专网。
          </div> 
          <div className="divider" />
        </Row>
        <Row>
          <div className="page-title">联系我们</div>
          <div className="contact-item label" >中国县域发展榜课题组邮箱：</div>
          <div className="contact-item" >
            <span className="label">电子邮件：</span>
            <span>xiaokangccdl@163.com</span>
          </div>
          <div className="contact-item" >
            <span className="label">王女士：</span>
            <span>18911646939</span>
          </div>
          <div className="contact-item" >
            <span className="label">孙先生：</span>
            <span>18610150311</span>
          </div>
          <div className="contact-item-more" style={{ color: '#42528a', cursor: 'pointer'}} >如你需要更多信息，请前往<Link style={{ borderBottom: '2px solid rgb(66, 82, 138)', color: 'rgb(66, 82, 138)'}} to="/cooperation">榜单合作</Link>。</div>
          <div className="contact-item-more" style={{ marginTop: 30}} >《小康》杂志社社址：</div>
          <div className="contact-item" >北京市朝阳区百子湾路32号苹果社区北区1号楼四层</div>
          <div className="contact-item" >如需更多信息，请前往介绍页面</div>
        </Row>
      </Row>
    );
  }
}
