import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../../component/Banner';
import Wait from '../../component/Wait'
import banner_04 from '../../assets/images/banner_04.png';
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
      <div>
        <Row className="channel-container">
          <Col span={24}>
            <Banner backgroundImage={banner_04} title="客服中心" desc="县域赋能产品中心" />
          </Col>
        </Row>
          <div>
            <Wait text="正在开发中..." />
          </div>
      </div>
    );
  }
}
