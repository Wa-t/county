import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../../component/Banner';
import Wait from '../../component/Wait'
import banner from '../../assets/images/banner_02.png';
import { checkFull } from '../../utils';
import './index.less';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.onresize = () => {
      if (!checkFull()) {
        alert('11');
      }
    };
  }

  render() {
    return (
      <div>
        <Row className="channel-container">
          <Col span={24}>
            <Banner backgroundImage={banner} title="榜单申报" desc="" />
          </Col>
        </Row>
        <div>
          <Wait text="正在开发中..." />
        </div>
      </div>
    );
  }
}
