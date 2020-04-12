import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_04 from '../../assets/images/banner_04.png';
import Article from '../../component/Article';
import './index.less';
import './platform.less';
import { passMenus } from './passMenus';

const { Search } = Input;

export default class Platform extends Component {
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
  render() {
    return (
      <Row className="pass-platform-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24} className="pass-content-container">
          <CarouselMenu menus={passMenus} perPageCount={8} />
          <Search placeholder="关键词搜索" onSearch={value => console.log(value)} enterButton size="large" />
          <Article />
        </Col>
      </Row>
    );
  }
}
