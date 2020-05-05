import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Input } from 'antd';
import Banner from '../../component/Banner';
import LineWave from '../../component/LineWave';
import banner_04 from '../../assets/images/banner_04.png';
import './index.less';
import { passMenus } from './passMenus';

const { Search } = Input;

export default class Pass extends Component {
  handleEnter = (e) => {
    // 预检测初始化放大的 menu
    if (document.querySelector('.pass-menu-item:nth-child(8)').hasAttribute('class', 'pass-menu-active')) {
      document.querySelector('.pass-menu-item:nth-child(8)').classList.remove('pass-menu-active');
    }
    e.currentTarget.classList.add('pass-menu-active');
  }
  handleLeave = (e) => {
    e.currentTarget.classList.remove('pass-menu-active');
  }
  renderModuleMenu() {
    return (
      <React.Fragment>
        {passMenus.map(menu => (
          <NavLink to={`/pass/platform/${menu.id}/${menu.title}`} key={menu.id} className={`pass-menu-item ${menu.id === passMenus.length ? 'pass-menu-active' : ''}`} >
            <div onMouseEnter={e => this.handleEnter(e)} onMouseLeave={e => this.handleLeave(e)}>
              <p>{menu.title}</p>
              <p>{menu.desc}</p>
            </div>
          </NavLink>
        ))}
      </React.Fragment>
    )
  }
  renderNavModule() {
    return (
      <div className="pass-nav-module">
        {this.renderModuleMenu()}
        <div className="module-content">
          <div className="module-header">
            <p className="module-title">关注民生  服务县域</p>
            <p className="module-subtitle">PEOPLE'S LIVELIHOOD TO SERVE THE COUNTY</p>
            <p className="module-name">郡县通</p>
          </div>
          <div className="module-body">
            <p>
              "郡县通"平台是面向县域推出的数字资讯技术产品服务平台。“郡县通”产品和服务包括：政会通智能会务系统、政网哨舆情预警系统、政讯报郡县政务参考、微讯社郡县新闻资讯门户、圆点直播政经民生视频直播、卡乐图片原创图像影音数据库、郡县云桥县域融媒采集编播系统等，更多产品与服务，将顺应县域政务发展需求而继续推出。
            </p>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Row className="pass-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24} className="pass-content-container">
          {/* <CarouselMenu menus={menus} perPageCount={8} /> */}
          <Search placeholder="关键词搜索" onSearch={value => console.log(value)} enterButton size="large" />
          {this.renderNavModule()}
        </Col>
        <LineWave id="line-one" length={90} amplitute={80} speed={2.5} />
        <LineWave id="line-two" length={85} amplitute={60} speed={1.3} />
      </Row>
    );
  }
}
